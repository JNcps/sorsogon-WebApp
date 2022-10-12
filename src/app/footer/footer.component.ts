import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  userData: any;
  showMe:boolean=false
  logout:boolean=false
  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
    var data = JSON.parse(localStorage.getItem('user_data') || '{}');
    this.userData = data.user.phoneNumber;
    console.log(this.userData);

  }

  toogleTag(){
    this.showMe=!this.showMe
   }

   toogleTag2(){
    this.logout=!this.logout
   }

   logOut(){
    localStorage.clear();//new line storage (weather.ts)
    return this.afAuth.signOut().then(()=>{
      this.router.navigate(['/phone']);
      console.log("Logged Out Successfully!");
    });
  }

}


