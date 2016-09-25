import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { MyAppComponent }  from '../../../js/ch01/angular-template';

describe('Chapter 1:', () => {
  let comp:    MyAppComponent;
  let fixture: ComponentFixture<MyAppComponent>;
  let el:      DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAppComponent ]
    });

    fixture = TestBed.createComponent(MyAppComponent);
    comp = fixture.componentInstance;
    el = fixture.debugElement.query(By.css('span'));
  });

  it('Testing Angular Template: Should update an element', () => {
    comp.name = 'Angular';
    fixture.detectChanges();
    expect(el.nativeElement.textContent).toEqual('Hello, Angular');
  });
});