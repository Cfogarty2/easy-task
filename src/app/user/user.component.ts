import { Component, EventEmitter, Input, Output  } from '@angular/core';
import { CardComponent } from "../shared/card/card.component";

type User = {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  // using "on" is a convention that is typically used when an event is executed
  onSelectUser() {
    this.select.emit(this.user.id);
  }

}
