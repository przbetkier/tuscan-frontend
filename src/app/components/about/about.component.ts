import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  extensionLink = 'https://chrome.google.com/webstore/detail/faceit-lobby-extension/iocddpjkmoaaminicflaggnckdainlef';
  frontendSourceCodeLink = 'https://github.com/przbetkier/tuscan-frontend';
  backendSourceCodeLink = 'https://github.com/przbetkier/tuscan';

  navigateToExtension() {
    window.open(this.extensionLink, '_blank');
  }

  navigateToFrontendSourceCode() {
    window.open(this.frontendSourceCodeLink, '_blank');
  }

  navigateToBackendSourceCode() {
    window.open(this.backendSourceCodeLink, '_blank');
  }
}
