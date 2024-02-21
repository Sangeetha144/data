import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
loginHeading:string = 'internal';
link:boolean= false;
  constructor(private fb: FormBuilder, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.createForm();
    this.route.params.subscribe(params=>{
      const loginType = params['loginType'];
      this.loginHeading = loginType === 'internal'? "Internal User Login" : "Partner's Login"
      this.link = loginType === 'external';
    })
  }

  createForm() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      localStorage.setItem('loggedIn','true')
            // Retrieve the entered username
            const username = this.loginForm.get('username')?.value;
 
            // Navigate to landing page with username as query parameter
            this.router.navigate(['/landing'], { queryParams: { username: username } });
    }     // Display error messages or take appropriate action
      
  }
}
