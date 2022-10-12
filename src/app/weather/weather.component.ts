import { Component, OnInit, NgZone } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/auth';
import 'firebase/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  otp!: string;
  verify: any;
  constructor(private router: Router, private ngZone: NgZone) {}

  config = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      width: '40px',
      height: '40px',
    },
  };

  ngOnInit() {
    this.verify = JSON.parse(localStorage.getItem('verificationId') || '{}');
    console.log(this.verify);
  }

  onOtpChange(otpCode: string) {
    this.otp = otpCode;
    console.log(this.otp);

  }

  handleClick() {
    console.log(this.otp);
    var credential = firebase.auth.PhoneAuthProvider.credential(this.verify, this.otp);
    console.log(credential);

    firebase.auth().signInWithCredential(credential).then((response) => {
      console.log(response);
        localStorage.setItem('user_data', JSON.stringify(response));
          this.router.navigate(['/background']);
      })
      .catch((error) => {alert(error.message);
      });
    //console.log(localStorage.getItem('user_data'));//new line for storage(footer.ts)
    //this.router.navigate(['/background']);
  }
}

