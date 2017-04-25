import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultVisualizeComponent } from './result-visualize.component';

describe('ResultVisualizeComponent', () => {
  let component: ResultVisualizeComponent;
  let fixture: ComponentFixture<ResultVisualizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultVisualizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultVisualizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
