import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberpanelComponent } from './memberpanel.component';

describe('MemberpanelComponent', () => {
  let component: MemberpanelComponent;
  let fixture: ComponentFixture<MemberpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
