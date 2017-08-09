/**
 * Created by anton on 02-Dec-16.
 */
import $ from 'jquery'

let KinveyRequester = (function () {
    const appKey = "kid_SJClfC5Mg";
    const appSecret = "ed17fd8ed48d403494385a6e5ca37ec6";
    const baseUrl = "https://baas.kinvey.com/";
    const kinveyAppAuthHeaders = {
        'Authorization': "Basic " + btoa(appKey + ":" + appSecret),
    };
    function loginUser(username, password ) {
        return $.ajax({
            method: "POST",
            url: baseUrl + "user/" + appKey + "/login",
            headers: kinveyAppAuthHeaders,
            data: { username, password }
        });
    }
    
    function registerUser(username, password) {
        return $.ajax({
            method: "POST",
            url: baseUrl + "user/" + appKey,
            headers: kinveyAppAuthHeaders,
            data: { username, password }
        });
    }

    function loadBooks() {
        return $.ajax({
            method: "GET",
            url: baseUrl + "appdata/" + appKey +  '/books',
            headers: getKinveyUserAuthHeaders()
        });
    }

    function createBook(book) {
        return $.ajax({
            method: "POST",
            url: baseUrl + "appdata/" + appKey + "/books",
            headers: getKinveyUserAuthHeaders(),
            data: book
        });
    }

    function findBookById(bookId) {
        return $.ajax({
            method: "GET",
            url: baseUrl + "appdata/" + appKey +  '/books/' + bookId,
            headers: getKinveyUserAuthHeaders()
        });
    }

    function editBook(bookId, title, author, description) {
        return $.ajax({
            method: "PUT",
            url: baseUrl + "appdata/" + appKey +  '/books/' + bookId,
            headers: getKinveyUserAuthHeaders(),
            data:{title, author, description}
        });
    }

    function deleteBookById(bookId) {
        return $.ajax({
            method: "DELETE",
            url: baseUrl + "appdata/" + appKey +  '/books/' + bookId,
            headers: getKinveyUserAuthHeaders(),
        });
    }

    function getKinveyUserAuthHeaders() {
        return {
            'Authorization': "Kinvey " + sessionStorage.getItem('authToken'),
        };
    }

    return {
        loginUser,
        registerUser,
        loadBooks,
        createBook,
        findBookById,
        editBook,
        deleteBookById
    }
})();

export default KinveyRequester;