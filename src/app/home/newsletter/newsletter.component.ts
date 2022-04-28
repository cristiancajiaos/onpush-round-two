import { Observable } from 'rxjs';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsletterComponent implements OnInit {

  @Input() user$: Observable<User>;

  @Output() subscribe = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  subscribeToNewsletter(email: string) {
    this.subscribe.emit(email);
  }

}
