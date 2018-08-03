import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoProfileComponent } from './ngo-profile.component';

describe('NgoProfileComponent', () => {
  let component: NgoProfileComponent;
  let fixture: ComponentFixture<NgoProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgoProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgoProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
