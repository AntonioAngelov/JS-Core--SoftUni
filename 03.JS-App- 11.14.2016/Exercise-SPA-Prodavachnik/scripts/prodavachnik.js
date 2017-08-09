function startApp() {
    sessionStorage.clear();
    showHideMenuLinks();
    showHomeView();

    //bind menu link buttons
    $('#linkHome').click(showHomeView);
    $('#linkLogin').click(showLoginView);
    $('#linkRegister').click(showRegisterView);
    $('#linkListAds').click(listAds);
    $('#linkCreateAd').click(showCreateAdView);
    $('#linkLogout').click(logOutUser);

    $("form").submit(function(e) { e.preventDefault() });

    //bind form submit buttons
    $('#buttonLoginUser').submit(loginUser);
    $('#buttonRegisterUser').submit(registerUser);
    $('#buttonCreateAd').click(createNewAd);
    $('#buttonEditAd').click(editAd);

    $('#buttonLoginUser').click(loginUser);
    $('#buttonRegisterUser').click(registerUser);

    $("#infoBox, #errorBox").click(function() {
        $(this).fadeOut();
    });

    $(document).on({
        ajaxStart: function () { $('#loadingBox').show()},
        ajaxStop: function () { $('#loadingBox').hide()}
        });

    function showHideMenuLinks() {
        $('#linkHome').show();
        if(sessionStorage.getItem('authToken')){
            //hide while logged in
            $('#linkRegister').hide();
            $('#linkLogin').hide();

            //show while logged in
            $('#linkListAds').show();
            $('#linkCreateAd').show();
            $('#linkLogout').show();
            $('#loggedInUser').show();
        }else{
            //show while not logged in
            $('#linkRegister').show();
            $('#linkLogin').show();

            //hide while not logged in
            $('#linkListAds').hide();
            $('#linkCreateAd').hide();
            $('#linkLogout').hide();
            $('#loggedInUser').hide();
        }
    }

    function showView(viewName) {
        $('main').find('section').hide();
        $('#' + viewName).show()
    }

    function showHomeView() {
        showView('viewHome');
    }

    function showLoginView() {
        showView('viewLogin');
    }

    function showRegisterView() {
        showView('viewRegister');
    }

    function showListAdsView() {
        showView('viewAds');
    }

    function showCreateAdView() {
        $('#formCreateAd').trigger('reset')
        showView('viewCreateAd');
    }

    function showEditAdView() {
        showView('viewEditAd');
    }

    let baseUrl = 'https://baas.kinvey.com/';
    let appKey = 'kid_B1fWovafl';
    let appSecret = 'acf4d86075464ea7905cf960aac54bdc';
    let authHeaders = {'Authorization': "Basic " + btoa(appKey + ':' + appSecret)};

    function registerUser() {
        let userData = {
            username: $('#viewRegister input[name=username]').val(),
            password: $('#viewRegister input[name=passwd]').val()
        };

    if(userData.username != '' && userData.password != ''){
        $.ajax({
            method: "POST",
            url: baseUrl + 'user/' + appKey + '/',
            data: userData,
            headers: authHeaders,
            success: registerSuccess,
            error: handleAjaxError
        });

    }
        function registerSuccess(userInfo) {
            saveAuthInSession(userInfo);
            showHideMenuLinks();
            listAds()
            showInfo('Registration successful');
        }
    }

    function saveAuthInSession(userInfo) {
        sessionStorage.setItem('username', userInfo.username);
        sessionStorage.setItem('authToken', userInfo._kmd.authtoken);
        sessionStorage.setItem('userId', userInfo._id);

        $('#loggedInUser').text(
            "Welcome, " + userInfo.username + "!");

    }

    function showInfo(info) {
        $('#infoBox').text(info);
        $('#infoBox').show();
        setTimeout(function () {
            $('#infoBox').fadeOut();
        }, 3000)
    }

    function handleAjaxError(response) {
        let errorMsg = JSON.stringify(response);
        if (response.readyState === 0)
            errorMsg = "Cannot connect due to network error.";
        if (response.responseJSON &&
            response.responseJSON.description)
            errorMsg = response.responseJSON.description;
        showError(errorMsg);

        function showError(errorMsg) {
            $('#errorBox').text(errorMsg);
            $('#errorBox').show();
        }
    }

    function listAds() {
        $('#ads').empty();
        showListAdsView();

        $.ajax({
            method: "GET",
            url: baseUrl + 'appdata/' + appKey + '/adverts',
            headers: getKinveyAuthHeader(),
            success: loadAdsSuccess,
            error: handleAjaxError
        });

        function loadAdsSuccess(adverts) {
            showInfo('Adverts loaded.')
           if(adverts.length == 0){
                $('#ads').text('No adds available.');
           }else{
               let adsTable = $('<table>');
               adsTable.append('<th>Title</th><th>Description</th><th>Publisher</th><th>Price</th><th>Date published</th><th>Actions</th>');
               for(let ad of adverts){
                   appendAdvertRow(adsTable, ad)
               }
               $('#ads').append(adsTable);
           }

        }

    }

    function getKinveyAuthHeader() {
        return {'Authorization': "Kinvey " + sessionStorage.getItem('authToken')};
    }

    function appendAdvertRow(container, ad) {
        let links = [];
        if(ad._acl.creator == sessionStorage['userId']){
            let delBtn = $('<a href="#">[Delete]</a>').click(() => deleteAd(ad));
            let editBtn = $('<a href="#">[Edit]</a>').click(() => loadAdForEdit(ad));

           links = [delBtn, " ", editBtn];
        }

        $(container).append($('<tr>').append(
            $('<td>').text(ad.title),
            $('<td>').text(ad.description),
            $('<td>').text(ad.publisher),
            $('<td>').text(ad.price),
            $('<td>').text(ad.dateOfPublishing),
            $('<td>').append(links)));
    }

    function deleteAd(ad) {
        $.ajax({
            method: "DELETE",
            url: baseUrl + 'appdata/' + appKey + '/adverts/' + ad._id,
            headers: getKinveyAuthHeader(),
            success: deleteAdSuccess,
            error: handleAjaxError
        });

        function deleteAdSuccess() {
            showInfo('Ad deleted.');
            listAds();
        }
    }

    function loadAdForEdit(ad) {
        $.ajax({
            method: "GET",
            url: baseUrl + 'appdata/' + appKey + '/adverts/' + ad._id,
            headers: getKinveyAuthHeader(),
            success: loadAdsForEditSuccess,
            error: handleAjaxError
        });

        function loadAdsForEditSuccess(ad) {
            $('#formEditAd input[name=id]').val(ad._id);
            $('#formEditAd input[name=publisher]').val(ad.publisher);
            $('#formEditAd input[name=title]').val(ad.title);
            $('#formEditAd textarea[name=description]').val(ad.description);
            $('#formEditAd textarea[name=datePublished]').val(ad.dateOfPublishing);
            $('#formEditAd input[name=price]').val(ad.price);
            showEditAdView()

        }
    }
    
    function editAd() {
        let editedData = {
            title: $('#formEditAd input[name=title]').val(),
            description:  $('#formEditAd textarea[name=description]').val(),
            publisher:  $('#formEditAd input[name=publisher]').val(),
            dateOfPublishing:  $('#formEditAd input[name=datePublished]').val(),
            price:  $('#formEditAd input[name=price]').val()
        }


       if($('#formEditAd input[name=title]').val().trim() != '' &&  $('#formEditAd textarea[name=description]').val().trim() != '' &&
           $('#formEditAd input[name=publisher]').val().trim() != '' && $('#formEditAd input[name=datePublished]').val().trim() != '' &&
           !isNaN($('#formEditAd input[name=price]').val())){
           $.ajax({
               method: "PUT",
               url: baseUrl + 'appdata/' + appKey + '/adverts/' + $('#formEditAd input[name=id]').val(),
               headers: getKinveyAuthHeader(),
               data: editedData,
               success: editAdSuccess,
               error: handleAjaxError
           })
       }
        
        function editAdSuccess() {
            listAds();
            showInfo('Ad edited.')
        }
        
    }

    function loginUser() {
        let userData = {
            username: $('#viewLogin input[name=username]').val(),
            password: $('#viewLogin input[name=passwd]').val()
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
            listAds();
            showInfo('Login successful.')
        }
    }

    function logOutUser() {
        sessionStorage.clear();
        $('#loggedInUser').text('');
        showHideMenuLinks();
        showHomeView();
        showInfo('Logout successful.')
    }

    function createNewAd() {
        let title = $('#formCreateAd input[name=title]').val();
        let description = $('#formCreateAd textarea[name=description]').val();
        let dateOfPublishing = $('#formCreateAd input[name=datePublished]').val();
        let price = $('#formCreateAd input[name=price]').val();
        let publisher = sessionStorage.getItem('username');

        let newAdData = {title:title, description:description, publisher:publisher, dateOfPublishing:dateOfPublishing, price:price};

        $.ajax({
            method: "POST",
            url: baseUrl + 'appdata/' + appKey + '/adverts',
            headers: getKinveyAuthHeader(),
            data:  newAdData,
            success: createAdSuccess,
            error:handleAjaxError
        });
        
        function createAdSuccess() {
            listAds();
            showInfo('New ad created.')
        }
    }

}