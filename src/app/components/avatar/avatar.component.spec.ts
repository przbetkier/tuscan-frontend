import { AvatarComponent } from './avatar.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BadgeComponent } from '../badge/badge.component';

describe('AvatarComponent', () => {
  let component: AvatarComponent;
  let fixture: ComponentFixture<AvatarComponent>;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      declarations: [AvatarComponent, BadgeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarComponent);
    component = fixture.componentInstance;
  });

  it('should create avatar component', async () => {
    expect(component).toBeTruthy();
  });

  it('should display avatar img', async () => {
    const givenAvatarUrl = 'https://www.tuscan.pro/assets/logos/banner.png';
    fixture.whenStable().then(() => {
      // given
      component.avatarUrl = givenAvatarUrl;
      component.level = 5;
      // when
      fixture.detectChanges();

      // then
      expect(fixture.debugElement.nativeElement.querySelector('div>img').src).toContain(givenAvatarUrl);
    });
  });
});
