/**
 * Created by anton on 11-Dec-16.
 */
function startApp() {
    sessionStorage.clear();
    showHideMenuLinks();
    showHomeView();

    //no user
    $('#linkMenuAppHome').click(showHomeView);
    $('#linkMenuLogin').click(showLoginView);
    $('#linkMenuRegister').click(showRegisterView);

    ////logged in user
    $('#linkMenuUserHome').click(showUserHomeScreen);
    $('#linkMenuMyMessages, #linkUserHomeMyMessages').click(listReceivedMessages);
    $('#linkMenuArchiveSent, #linkUserHomeArchiveSent').click(listSentMessages);
    $('#linkMenuSendMessage, #linkUserHomeSendMessage').click(prepareRecipients);
    $('#linkMenuLogout').click(logoutUser);

    $("form").submit(function (e) {
        e.preventDefault()
    });

    $('#formRegister').submit(registerUser);
    $('#formLogin').submit(loginUser);
    $('#formSendMessage').submit(sendNewMessage);

    $("#infoBox, #errorBox").click(function () {
        $(this).fadeOut();
    });

    function showInfo(info) {
        $('#infoBox').text(info);
        $('#infoBox').show();
        setTimeout(function () {
            $('#infoBox').fadeOut();
        }, 3000)
    }

    function showError(errorMsg) {
        $('#errorBox').text(errorMsg);
        $('#errorBox').show();
    }

    $(document).on({
        ajaxStart: function () {
            $('#loadingBox').show()
        },
        ajaxStop: function () {
            $('#loadingBox').hide()
        }
    });


    //managing links buttons
    function showHideMenuLinks() {
        if (sessionStorage.getItem('authToken')) {
            //hide while logged in
            $('#linkMenuLogin').hide();
            $('#linkMenuRegister').hide();
            $('#linkMenuAppHome').hide();

            //show while logged in
            $('#linkMenuUserHome').show();
            $('#linkMenuMyMessages').show();
            $('#linkMenuArchiveSent').show();
            $('#linkMenuSendMessage').show();
            $('#linkMenuLogout').show();
            $("#spanMenuLoggedInUser").show();
        } else {
            //show while not logged in
            $('#linkMenuAppHome').show();
            $('#linkMenuLogin').show();
            $('#linkMenuRegister').show();

            //hide while not logged in
            $('#linkMenuUserHome').hide();
            $('#linkMenuMyMessages').hide();
            $('#linkMenuArchiveSent').hide();
            $('#linkMenuSendMessage').hide();
            $('#linkMenuLogout').hide();
            $("#spanMenuLoggedInUser").hide();
        }
    }

    //showing views
    function showView(viewName) {
        $('main').find('section').hide();
        $('#' + viewName).show()
    }

    function showHomeView() {
        showView('viewAppHome');
    }

    function showLoginView() {
        showView('viewLogin');
    }

    function showRegisterView() {
        showView('viewRegister');

    }

    function showUserHomeScreen(){
        $('#viewUserHomeHeading')
            .text(`Welcome, ${sessionStorage.getItem('username')}!`)
        showView('viewUserHome');
    }

    function showReceivedMessages() {
        showView('viewMyMessages');
    }
    
    function showCreateMessageView() {
        $('#msgText').trigger('reset');
        showView('viewSendMessage');
    }
    
    function showSentMessagesView() {
        showView('viewArchiveSent');
    }


    //saving authorizations
    function saveAuthInSession(userInfo) {
        sessionStorage.setItem('username', userInfo.username);
        sessionStorage.setItem('authToken', userInfo._kmd.authtoken);
        sessionStorage.setItem('userId', userInfo._id);
        sessionStorage.setItem('name', userInfo.name);

        $('#spanMenuLoggedInUser').text(
            "Welcome, " + userInfo.username + "!");

    }

    let baseUrl = 'https://baas.kinvey.com/';
    let appKey = 'kid_ByEQndcmx';
    let appSecret = '6185f46dc4184f95bdd7074738d23880';
    let authHeaders = {'Authorization': "Basic " + btoa(appKey + ':' + appSecret)};

    //registering new user
    function registerUser() {
        let userData = {
            username: $('#viewRegister input[name=username]').val(),
            password: $('#viewRegister input[name=password]').val(),
            name: $('#viewRegister input[name=name]').val()
        };

            $.ajax({
                method: "POST",
                url: baseUrl + 'user/' + appKey + '/',
                data: userData,
                headers: authHeaders,
                success: registerSuccess,
                error: handleAjaxError
            });

        function registerSuccess(userInfo) {
            saveAuthInSession(userInfo);
            showHideMenuLinks();
            showUserHomeScreen();
            showInfo('User registration successful.');
        }

    }

    //error handler
    function handleAjaxError(response) {
        let errorMsg = JSON.stringify(response);
        if (response.readyState === 0)
            errorMsg = "Cannot connect due to network error.";
        if (response.responseJSON &&
            response.responseJSON.description)
            errorMsg = response.responseJSON.description;
        showError(errorMsg);
    }

    //login user
    function loginUser() {
        let userData = {
            username: $('#viewLogin input[name=username]').val(),
            password: $('#viewLogin input[name=password]').val()
        };

        $.ajax({
            method: "POST",
            url: baseUrl + 'user/' + appKey + '/login',
            headers: authHeaders,
            data: userData,
            success: loginSuccess,
            error: handleAjaxError
        });

        function loginSuccess(userInfo) {
            saveAuthInSession(userInfo);
            showHideMenuLinks();
            showUserHomeScreen();
            showInfo('Login successful.');
        }
    }

    function getKinveyAuthHeader() {
        return {'Authorization': "Kinvey " + sessionStorage.getItem('authToken')};
    }

    //logout user
    function logoutUser() {
        $.ajax({
            method: "POST",
            url: baseUrl + 'user/' + appKey + '/_logout',
            headers: getKinveyAuthHeader(),
            success: logoutSuccess,
            error: handleAjaxError
        });

        function logoutSuccess() {
            $('#loggedInUser').text('');
            sessionStorage.clear();
            showHideMenuLinks();
            showHomeView();
            showInfo('Logout successful.')
        }
    }

    //listing received messages
    function listReceivedMessages() {
        $('#myMessages').empty();
        showReceivedMessages();

        $.ajax({
            method: "GET",
            url: baseUrl + 'appdata/' + appKey +
            `/messages?query={"recipient_username":` + '"' + sessionStorage.getItem('username') + '"}',
            headers: getKinveyAuthHeader(),
            success: loadMessagesSuccess,
            error: handleAjaxError
        });

        function loadMessagesSuccess(messages) {
            showInfo('Received messages loaded.');

            let myMessagesTable = $('<table>');
            myMessagesTable.append($('<thead>').append($('<tr>')
                    .append('<th>From</th>')
                    .append('<th>Message</th>')
                    .append('<th>Date Received</th>')
            ))
            ;

            let tableBody = $('<tbody>');

            if(messages.length != 0){
                for(let message of messages){
                    appendMyMessageRow(tableBody, message)
                }
                myMessagesTable.append(tableBody);
            }
            $('#myMessages').append(myMessagesTable);

        }

    }
    
    function appendMyMessageRow(container, message) {
            $(container).append($('<tr>')
                .append($('<td>').text(formatSender(message.sender_name, message.sender_username)))
                .append($('<td>').text(message.text))
                .append($('<td>').text(formatDate(message._kmd.lmt)))
            );
    }

    function formatDate(dateISO8601) {
        let date = new Date(dateISO8601);
        if (Number.isNaN(date.getDate()))
            return '';
        return date.getDate() + '.' + padZeros(date.getMonth() + 1) +
            "." + date.getFullYear() + ' ' + date.getHours() + ':' +
            padZeros(date.getMinutes()) + ':' + padZeros(date.getSeconds());

        function padZeros(num) {
            return ('0' + num).slice(-2);
        }
    }

    function formatSender(name, username) {
        if (!name)
            return username;
        else
            return username + ' (' + name + ')';
    }

    function prepareRecipients() {
        $.ajax({
            method: "GET",
            url: baseUrl + 'user/' + appKey + '/',
            headers: getKinveyAuthHeader(),
            success: loadCreateCreateForm,
            error: handleAjaxError
        });

        function loadCreateCreateForm(users) {
           loadUsersInCreate(users);
           showCreateMessageView();
        }

        function loadUsersInCreate(users) {
            let selectContainer = $('#msgRecipientUsername');
            selectContainer.empty();
            for(let user of users){
                selectContainer.append($('<option>')
                    .val(user.username)
                    .text(formatSender(user.name, user.username)))
            }

        }
    }

    function sendNewMessage() {
        let senderUsername = sessionStorage.getItem('username');
        let senderName = sessionStorage.getItem('name');
        let recUsername = $('#msgRecipientUsername').val();
        let text = $('#msgText').val();
        let newMessageData = {sender_username: senderUsername,
            sender_name: senderName,
            recipient_username: recUsername,
            text:text};


        $.ajax({
            method: "POST",
            url: baseUrl + 'appdata/' + appKey + '/messages',
            headers: getKinveyAuthHeader(),
            data:  newMessageData,
            success: sendMessageSuccess,
            error:handleAjaxError
        });

        function sendMessageSuccess() {
            listSentMessages();
            showInfo('Message sent.')
        }

    }
    
    function listSentMessages() {
        $('#sentMessages').empty();
        showSentMessagesView();

        $.ajax({
            method: "GET",
            url: baseUrl + 'appdata/' + appKey +
            `/messages?query={"sender_username":` + '"' + sessionStorage.getItem('username') + '"}',
            headers: getKinveyAuthHeader(),
            success: loadSentMessagesSuccess,
            error: handleAjaxError
        });

        function loadSentMessagesSuccess(messages) {
            showInfo('Sent messages loaded.');

            let sentMessagesTable = $('<table>');
            sentMessagesTable.append($('<thead>').append($('<tr>')
                .append('<th>To</th>')
                .append('<th>Message</th>')
                .append('<th>Date Received</th>')
                .append('<th>Actions</th>')
            ))
            ;

            let sentTableBody = $('<tbody>');

            if(messages.length != 0){
                for(let message of messages){
                    appendSentMessageRow(sentTableBody, message)
                }
                sentMessagesTable.append(sentTableBody);
            }
            $('#sentMessages').append(sentMessagesTable);

        }
    }

    function appendSentMessageRow(container, message) {
        let deleteBtn = $('<a href="#">[Delete]</a>').click(() => deleteMessage(message));


        $(container).append($('<tr>')
            .append($('<td>').text(message.recipient_username))
            .append($('<td>').text(message.text))
            .append($('<td>').text(formatDate(message._kmd.lmt)))
            .append(deleteBtn)
        );
    }

    function deleteMessage(message){
        $.ajax({
            method: "DELETE",
            url: baseUrl + 'appdata/' + appKey + '/messages/' + message._id,
            headers: getKinveyAuthHeader(),
            success: deleteMessageSuccess,
            error: handleAjaxError
        });

        function deleteMessageSuccess() {
            showInfo('Message deleted.');
            listSentMessages();
        }
    }
    

}