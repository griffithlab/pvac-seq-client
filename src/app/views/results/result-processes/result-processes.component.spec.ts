import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultProcessesComponent } from './result-processes.component';

describe('ResultProcessesComponent', () => {
  let component: ResultProcessesComponent;
  let fixture: ComponentFixture<ResultProcessesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultProcessesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultProcessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
