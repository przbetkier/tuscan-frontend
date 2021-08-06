import { AboutComponent } from './about.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { InlineSVGModule } from 'ng-inline-svg';
import { MatCardModule } from '@angular/material/card';
import { HttpBackend } from '@angular/common/http';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      imports: [InlineSVGModule, MatCardModule],
      declarations: [AboutComponent],
      providers: [HttpBackend]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
  });

  it('should create about component', async () => {
    expect(component).toBeTruthy();
  });

  it('should display three icons', async () => {
    fixture.whenStable().then(() => {
      fixture.detectChanges();

      // given
      const icons = fixture.debugElement.queryAll(By.css('.icon')).map(e => e.nativeElement);
      // expect
      expect(icons.length).toBe(3);
    });
  });

  it('should redirect to proper page when tile is clicked', async () => {
    // when
    spyOn(window, 'open');

    fixture.whenStable().then(() => {
      fixture.detectChanges();

      // given
      const frontendAboutTile = fixture.debugElement.query(By.css('#github-frontend-about')).nativeElement;
      // when
      frontendAboutTile.click();
      // then
      expect(window.open).toHaveBeenCalledWith(component.frontendSourceCodeLink, '_blank');

      // given
      const backendAboutTile = fixture.debugElement.query(By.css('#github-backend-about')).nativeElement;
      // when
      backendAboutTile.click();
      // then
      expect(window.open).toHaveBeenCalledWith(component.backendSourceCodeLink, '_blank');

      // given
      const chromeExtensionTile = fixture.debugElement.query(By.css('#chrome-extension-about')).nativeElement;
      // when
      chromeExtensionTile.click();
      // then
      expect(window.open).toHaveBeenCalledWith(component.extensionLink, '_blank');
    });
  });
});
