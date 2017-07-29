import { Component, OnInit } from '@angular/core';


import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

import { Location } from '@angular/common';
import { NgIf } from '@angular/common';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-login-and-register',
  templateUrl: './login-and-register.component.html',
  styleUrls: ['./login-and-register.component.scss']
})
export class LoginAndRegisterComponent implements OnInit {

  loginTab = true;
  errorMessage = "";


  //Form Variables

  //User Login
  loginEmail: string;
  loginPassword: string;

  //User Signup
  signupUsername: string;
  signupEmail: string;
  signupPassword: string;

  authenticated: boolean;

  //Awaiting Response ...  Variable
  responseLoading = false;
  actionSucceeded = false;


  user: Observable<firebase.User>;

  constructor(public firebaseAuth: AngularFireAuth, public db: AngularFireDatabase, public location: Location) {
    this.user = firebaseAuth.authState;

    this.firebaseAuth.authState.subscribe(res => {
      if (res && res.uid) {
        this.authenticated = true;
        console.log(res);
      } else {
        this.authenticated = false;
      }
    });

  }

  //LifeCycle Event
  ngOnInit() { }

  //Functions
  closeLogin() { this.location.back(); }
  setLogin() { this.loginTab = true; }
  setNewAccount() { this.loginTab = false; }



  //Email Validation
  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  validateUserName(username) {
    var re = /^[a-z0-9]+$/i;
    return re.test(username);
  }


  createAccount() {

    this.responseLoading = true;
    this.errorMessage = ""

    //Client Form Validation
    if (this.signupUsername && this.signupEmail && this.signupPassword) {
      console.log("all fields filled in.");
    }
    else {
      this.errorMessage = "Bitte fülle alle Felder aus.";
      return;
    }

    if (this.signupUsername.length > 2 && this.signupUsername.length < 13) {
      console.log("username length ok");
    } else {
      this.errorMessage = "Der Benutzername sollte zwischen 3 und 12 Zeichen lang sein.";
      return;
    }

    if (this.validateEmail(this.signupEmail)) {
      console.log("email valid!");
    }
    else {
      this.errorMessage = "Deine email ist ungültig.";
      return;
    }

    if (this.signupPassword.length >= 5 && this.signupPassword.length < 51) {
      console.log("password valid!");
    }
    else {
      this.errorMessage = "Dein Passwort sollte zwischen 5 und 50 Zeichen lang sein. Wähle ein sicheres Passwort";
      return;
    }
    //Client Form Validation END

    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(this.signupEmail, this.signupPassword)
      .then(value => {
        console.log('Success!', value);
        console.log("success value: " + value)
        this.responseLoading = false;
        this.actionSucceeded = true;
      })
      .catch(err => {
        this.errorMessage = err.message;
        this.responseLoading = false;
      });
  }

  loginUser() {
    this.responseLoading = true;

    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(this.loginEmail, this.loginPassword)
      .then(value => {
        this.responseLoading = false;
        this.actionSucceeded = true;
      })
      .catch(err => {
        this.errorMessage = err.message;
        this.responseLoading = false;
      });
  }

}







/*






  // user: Observable<firebase.User>;
  // userNode: FirebaseObjectObservable<any[]>;




  // this.userNode = db.object('/');

  // this.user = firebaseAuth.authState;
  //
  // this.firebaseAuth.authState.subscribe(res => {
  //   if (res && res.uid) {
  //     console.log('user is logged in');
  //   } else {
  //     console.log('user not logged in');
  //   }
  // });





// this.firebaseAuth
//   .auth
//   .createUserWithEmailAndPassword("timeo.schmidt@gmx.de", "top-secret")
//   .then(value => {
//     console.log('Success!', value);
//   })
//   .catch(err => {
//     console.log('Something went wrong:', err.message);
//   });

// this.firebaseAuth
//   .auth
//   .signInWithEmailAndPassword("timeo.schmidt@gmx.de", "top-secret")
//   .then(value => {
//     console.log('Nice, it worked!');
//   })
//   .catch(err => {
//     console.log('Something went wrong:', err.message);
//   });
*/
