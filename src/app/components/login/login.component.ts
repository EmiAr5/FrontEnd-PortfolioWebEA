import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;

  constructor(private tokenS:TokenService, private authS:AuthService, private router: Router) { }
  
  ngOnInit(): void {
    if (this.tokenS.getToken()) {
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenS.getAuthorities();
    }
  }

  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password); this.authS.login(this.loginUsuario).subscribe
      (data => {
        this.isLogged = true;
        this.isLogginFail = false;
        this.tokenS.setToken(data.token);
        this.tokenS.setUserName(data.nombreUsuario);
        this.tokenS.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate(['']);
      }, err => {
        this.isLogged = false;
        this.isLogginFail = true;
        this.errMsj = err.error.mensaje;
        console.log(this.errMsj);
      })
  }
}
