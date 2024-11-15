import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'herosApp';
  constructor( private AuthService:AuthService) {}

  ngOnInit(): void {
    this.AuthService.checkAuthentication().subscribe( isAuth => {
      console.log('isAuth', isAuth);
    } );
  }
}
