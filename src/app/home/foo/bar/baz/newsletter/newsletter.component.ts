import { Observable } from 'rxjs';
import { UserService } from './../../../../../services/user.service';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NewsletterService } from './newsletter.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsletterComponent implements OnInit {

  firstName: string;

  public user$: Observable<User>;

  @Output() subscribe = new EventEmitter();

  constructor(
    private newsletterService: NewsletterService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.user$ = this.userService.user$;
    this.user$.subscribe(user => {
      this.firstName = user.firstName
    });
  }

  subscribeToNewsletter(email: string) {
    // this.newsletterService.subscribe(email);
    this.subscribe.emit(email);
  }

}
