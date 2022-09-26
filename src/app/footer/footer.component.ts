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
    var data = JSON.parse(localStorage.getItem('userData') || '{}');
    this.userData = data;
    console.log(this.userData);

  }

  toogleTag(){
    this.showMe=!this.showMe
   }

   toogleTag2(){
    this.logout=!this.logout
   }

   logOut(){
    return this.afAuth.signOut().then(()=>{
      this.router.navigate(['/phone'])
    })
  }

}


