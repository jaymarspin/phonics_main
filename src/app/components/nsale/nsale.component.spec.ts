import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NsaleComponent } from './nsale.component';

describe('NsaleComponent', () => {
  let component: NsaleComponent;
  let fixture: ComponentFixture<NsaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NsaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
