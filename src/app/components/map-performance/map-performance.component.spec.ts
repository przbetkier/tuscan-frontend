import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapPerformanceComponent } from './map-performance.component';

describe('MapPerformanceComponent', () => {
  let component: MapPerformanceComponent;
  let fixture: ComponentFixture<MapPerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapPerformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
