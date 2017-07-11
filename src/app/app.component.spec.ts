/* tslint:disable:no-unused-variable */
import { AppComponent } from './app.component';

import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

////////  SPECS  /////////////

/// Delete this
fdescribe('Smoke test', () => {
  it('should run a passing test', () => {
    expect(true).toEqual(true, 'should pass');
  });
});

fdescribe('AppComponent with TCB', function() {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        RouterTestingModule
      ]
    });
  });

  it('should instantiate component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
  });

  it('should include router-outlet element', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const routerElement = fixture.debugElement.query(el => el.name === 'router-element').nativeElement;  // it works

    expect(routerElement).toBeDefined();
  });
});
