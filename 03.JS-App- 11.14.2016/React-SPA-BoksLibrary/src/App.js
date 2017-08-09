import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import NavigationBar from './Components/NavigationBar'
import Footer from './Components/Footer'

import HomeView from './Views/HomeView'
import LoginView from './Views/LoginView'
import RegisterView from './Views/RegisterView'
import ListBooksView from './Views/ListBooksView'
import CreateBookView from './Views/CreateBookView'
import EditBookView from './Views/EditBookView'
import DeleteBookView from './Views/DeleteView'

import KinveyRequester from './KinveyRequester'

import $ from 'jquery'

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: null,
            userId: null
        }
    }

    render() {
        return (
            <div className="App">
                <header>
                    <NavigationBar
                        username={this.state.username}
                        homeClicked={this.showHomeView.bind(this)}
                        loginClicked={this.showLoginView.bind(this)}
                        registerClicked={this.showRegisterView.bind(this)}
                        booksClicked={this.showBooksView.bind(this)}
                        createBookClicked={this.showCreateBookView.bind(this)}
                        logoutClicked={this.logout.bind(this)}
                    />
                    <div id="loadingBox">Loading ...</div>
                    <div id="infoBox">Info</div>
                    <div id="errorBox">Error</div>
                </header>
                <main id="main">
                </main>
                <Footer />
            </div>
        );
    }

    componentDidMount(){
        //attach global AJAX loading handler
        $(document).on({
            ajaxStart: function() { $("#loadingBox").show() },
            ajaxStop: function() { $("#loadingBox").hide() }
        });

         //attach global AJAX error handler
        $(document).ajaxError(
            this.handleAjaxError.bind(this));

        //Load state
        this.setState({
            username: sessionStorage.getItem("username"),
            userId: sessionStorage.getItem("userId")
        });

        this.showHomeView();

        $('#errorBox, #infoBox').click(function () {
            $(this).hide();
        });
    }

    handleAjaxError(event, response) {
        let errorMsg = JSON.stringify(response);
        if (response.readyState === 0)
            errorMsg = "Cannot connect due to network error.";
        if (response.responseJSON &&
            response.responseJSON.description)
            errorMsg = response.responseJSON.description;
        this.showError(errorMsg);
    }
    showInfo(message) {
        $('#infoBox').text(message).show();
        setTimeout(function() {
            $('#infoBox').fadeOut();
        }, 3000);
    }

    showError(errorMsg) {
        $('#errorBox').text("Error: " + errorMsg).show();
    }


  showView(reactComponent){
      ReactDOM.render(
          reactComponent,
          document.getElementById('main')
      );
      $('#errorBox').hide();
  }

  showHomeView(){
      this.showView(<HomeView/>);
  }

  showLoginView(){
     this.showView(<LoginView onsubmit={this.login.bind(this)}/>);
  }

  login(username, password){
      KinveyRequester.loginUser(username, password)
          .then(loginSuccess.bind(this));
      
      function loginSuccess(userInfo) {
          this.showInfo('Login successful.')
          this.saveAuthInSession(userInfo);
          this.showBooksView();

      }
  }

    saveAuthInSession(userInfo) {
        sessionStorage.setItem('authToken', userInfo._kmd.authtoken);
        sessionStorage.setItem('userId', userInfo._id);
        sessionStorage.setItem('username', userInfo.username);

        // This will update the entire app UI (e.g. the navigation bar)
        this.setState({
            username: userInfo.username,
            userId: userInfo._id
        });
    }

  showRegisterView(){
      this.showView(<RegisterView onsubmit={this.register.bind(this)}/>);
  }

  register(username, password){
      KinveyRequester.registerUser(username, password)
          .then(registerSuccess.bind(this));

      function registerSuccess(userInfo) {
          this.showInfo('Register successful.')
          this.saveAuthInSession(userInfo);
          this.showBooksView();

      }
  }

  showBooksView(){
      KinveyRequester.loadBooks()
          .then(loadBooksSuccess.bind(this));

      function loadBooksSuccess(books) {
          this.showInfo('Books loaded.');
          this.showView(
              <ListBooksView
                  books={books}
                  onedit={this.prepareBookForEdit.bind(this)}
                  ondelete={this.confirmBookDelete.bind(this)}/>);

      }
  }

  prepareBookForEdit(bookId){
      KinveyRequester.findBookById(bookId)
          .then(loadBookForEditSuccess.bind(this));

      function loadBookForEditSuccess(bookInfo) {
          this.showView(
              <EditBookView
                  onsubmit={this.editBook.bind(this)}
                  bookId={bookInfo._id}
                  title={bookInfo.title}
                  author={bookInfo.author}
                  description={bookInfo.description}
              />
          );
      }
  }

    editBook(bookId, title, author, description){
        KinveyRequester.editBook(bookId, title, author, description)
            .then(editBookSuccess.bind(this));

        function editBookSuccess() {
            this.showBooksView();
            this.showInfo("Book created.");
        }
    }

    confirmBookDelete(bookId) {
        KinveyRequester.findBookById(bookId)
            .then(loadBookForDeleteSuccess.bind(this));

        function loadBookForDeleteSuccess(bookInfo) {
            this.showView(
                <DeleteBookView
                    onsubmit={this.deleteBook.bind(this)}
                    bookId={bookInfo._id}
                    title={bookInfo.title}
                    author={bookInfo.author}
                    description={bookInfo.description}
                />
            );
        }
    }

    deleteBook(bookId) {
        KinveyRequester.deleteBookById(bookId)
            .then(deleteBookSuccess.bind(this));

        function deleteBookSuccess() {
            this.showBooksView();
            this.showInfo("Book deleted.");
        }
    }


  showCreateBookView(){
      this.showView(<CreateBookView onsubmit={this.create.bind(this)}/>);
  }

  create(title, author, description){
      KinveyRequester.createBook({title, author, description})
          .then(createBookSuccess.bind(this));

      function createBookSuccess(books) {
          this.showInfo('Book created.');
          this.showBooksView();

      }
  }

  logout(){
      sessionStorage.clear();
      // This will update the entire app UI (e.g. the navigation bar)
      this.setState({
          username: null,
          userId: null
      });

      this.showHomeView();
  }
}

