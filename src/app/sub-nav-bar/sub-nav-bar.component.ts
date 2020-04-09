import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-sub-nav-bar',
  templateUrl: './sub-nav-bar.component.html',
  styleUrls: ['./sub-nav-bar.component.css']
})
export class SubNavBarComponent implements OnInit {

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
  }

}
