import { Component, OnInit, NgZone } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/auth';
import 'firebase/firestore';
import { Router } from '@angular/router';


var config = {
  projectId: 'sorsogon-db-system',
   appId: '1:828386328406:web:3401566eb8f3f8b08720f7',
   storageBucket: 'sorsogon-db-system.appspot.com',
   apiKey: 'AIzaSyDwr0DeDok6oUmp_Ley692ywf5GtGKnQXY',
  authDomain: 'sorsogon-db-system.firebaseapp.com',
  messagingSenderId: '828386328406',
}

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {

  phoneNumber: any;
  reCaptchaVerifier: any;
  verificationCode: any;
  verificationId: any;
  show:boolean=false

  constructor(private router: Router, private ngZone: NgZone) {}


  ngOnInit() {
    firebase.initializeApp(config)

  }


  getOTP() {
    this.reCaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      'sign-in-button',
      {
        size: 'invisible',
      }
    );
    console.log(this.reCaptchaVerifier);//

    console.log(this.phoneNumber);//
    firebase
      .auth()
      .signInWithPhoneNumber(this.phoneNumber, this.reCaptchaVerifier)
      .then((confirmationResult) => {
        localStorage.setItem(
          'verificationId',
          JSON.stringify(confirmationResult.verificationId)
        );

          this.router.navigate(['/weather']);

      })
      .catch((error) => {
        console.log(error.message);//
        alert(error.message);
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      });
  }


  //signIn(){
  //  var credential = firebase.auth.PhoneAuthProvider.credential( this.phoneNumber, this.verificationId);
  //  firebase.auth().signInWithCredential(credential);
  //}

  toogleTag(){
    this.show=!this.show
  }


}
