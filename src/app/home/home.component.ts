import { NewsletterService } from './newsletter/newsletter.service';
import { User } from './../interfaces/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: User = {
    firstName: 'Alice',
    lastName: 'Smith'
  };

  constructor(
    private newsletterService: NewsletterService
  ) { }

  ngOnInit(): void {
  }

  subscribe(email: string) {
    this.newsletterService.subscribe(email);
  }

  changeUserName() {
    this.user = {
      firstName: 'Bob',
      lastName: 'Smith',
    };
  }

  reset() {
    this.user = {
      firstName: 'Alice',
      lastName: 'Smith',
    };
  }
}
