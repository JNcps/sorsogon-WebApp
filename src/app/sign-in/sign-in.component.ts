import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  loginForm!: FormGroup;
  isSubmitted = false;
  returnUrl = '';
  fc: any;


  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      //name: ['', [Validators.required, Validators.name]],
      number: ['', Validators.required]
    });
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl']; /*returnUrl to ['returnUrl']*/
  }

  get formControl() {
    return this.loginForm.controls;
  }

  onBackgroundClick(){
    this.router.navigateByUrl('/sign-up');
   }


/*
console.log('submit() called!');

    this.isSubmitted = true;
    if (this.loginForm.invalid) return;

    this.userService.login({name:this.fc.name.value,
      number: this.fc.number.value}).subscribe(() => {
        this.router.navigateByUrl(this.returnUrl);
      });
    alert(`name: ${this.fc.name.value},
    number: ${this.fc.number.value}`)
    this.userService.login({name:this.fc.name.value,
      number: this.fc.number.value}).subscribe(() => {
        this.router.navigateByUrl(this.returnUrl);
      });*/

}
