import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatstylesComponent } from './matstyles.component';

describe('MatstylesComponent', () => {
  let component: MatstylesComponent;
  let fixture: ComponentFixture<MatstylesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatstylesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatstylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
