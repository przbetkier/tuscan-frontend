import {Component} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  navigateToExtension() {
    window.open('https://chrome.google.com/webstore/detail/faceit-lobby-extension/iocddpjkmoaaminicflaggnckdainlef', '_blank');
  }

  navigateToFrontendSourceCode() {
    window.open('https://github.com/przbetkier/tuscan-frontend', '_blank');
  }

  navigateToBackendSourceCode() {
    window.open('https://github.com/przbetkier/tuscan', '_blank');
  }
}
