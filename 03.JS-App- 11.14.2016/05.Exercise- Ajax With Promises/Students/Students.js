/**
 * Created by anton on 25-Nov-16.
 */
function attachEvents() {
    const baseUrl = "https://baas.kinvey.com/appdata/kid_BJXTsSi-e/students/";
    const username = "guest";
    const password = "guest";
    const base64Auth = btoa(username + ':' + password);
    const authorizationHeader = {Authorization: `Basic ${base64Auth}`};

        $("#addBtn").click(addNewStudent);
        $("#loadBtn").click(loadStudents);


    function loadStudents() {
        $.ajax({
            method: "GET",
            url: baseUrl,
            headers: authorizationHeader,
        })
            .then(displayStudents)
            .catch(displayError)
    }

    function addNewStudent() {
        let data = parseNewStudInfo();
        $.ajax({
            method: "POST",
            headers: authorizationHeader,
            url: baseUrl,
            data: data,
            contentType: 'application/json'
        })
            .then(loadStudents)
            .then(clearInput)
            .catch(displayError);

    }


    function displayError(err) {
        alert(err.status + `(${err.statusText})`);
    }

    function displayStudents(studentsArr) {
        $("#results").find('tr.row').remove();
        studentsArr.sort((stud1, stud2) => stud1.ID - stud2.ID);
        for(let student of studentsArr){
            let currRow = $('<tr class="row">');
            currRow
                .append($("<td>").text(student.ID))
                .append($("<td>").text(student.FirstName))
                .append($("<td>").text(student.LastName))
                .append($("<td>").text(student.FacultyNumber))
                .append($("<td>").text(student.Grade));

            $('#results').append(currRow);
        }
    }

    function parseNewStudInfo() {
        let id = Number($('#id').val().trim());
        let firstName = $('#firstName').val().trim();
        let lastName = $('#lastName').val().trim();
        let facultyNumber = $('#facultyNumber').val().trim();
        let grade = Number($('#grade').val().trim());


       if(id !== '' && firstName !== '' && lastName !== '' && facultyNumber !== '' && grade !== ''){
           return JSON.stringify({
               ID:id,
               FirstName:firstName,
               LastName:lastName,
               FacultyNumber:facultyNumber,
               Grade:grade});
       }

    }

    function clearInput() {
        $('input[id]').val('');
    }

}