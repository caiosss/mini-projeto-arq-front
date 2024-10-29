import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliotecaViewComponent } from './biblioteca-view.component';

describe('BibliotecaViewComponent', () => {
  let component: BibliotecaViewComponent;
  let fixture: ComponentFixture<BibliotecaViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BibliotecaViewComponent]
    });
    fixture = TestBed.createComponent(BibliotecaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
