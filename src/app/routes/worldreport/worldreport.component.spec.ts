import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldreportComponent } from './worldreport.component';

describe('WorldreportComponent', () => {
  let component: WorldreportComponent;
  let fixture: ComponentFixture<WorldreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
