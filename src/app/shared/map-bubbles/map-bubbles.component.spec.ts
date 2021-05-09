import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapBubblesComponent } from './map-bubbles.component';

describe('MapBubblesComponent', () => {
  let component: MapBubblesComponent;
  let fixture: ComponentFixture<MapBubblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapBubblesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapBubblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
