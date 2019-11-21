import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent {

  @Input() avatarUrl: string;
  @Input() level: number;

  constructor() {
  }

}
