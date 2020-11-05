import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent {

  @Input() avatarUrl: string;
  @Input() level: number;

  defaultAvatar = 'assets/common/empty-avatar.jpeg';

  handleImageError() {
    this.avatarUrl = this.defaultAvatar;
  }
}
