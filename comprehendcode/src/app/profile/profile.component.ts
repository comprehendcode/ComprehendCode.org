import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserDetails } from '../authentication.service';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  public details: UserDetails;
  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
    this.details = this.auth.getUserDetails()
  }
 
} 