import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinaViewComponent } from './disciplina-view.component';

describe('DisciplinaViewComponent', () => {
  let component: DisciplinaViewComponent;
  let fixture: ComponentFixture<DisciplinaViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisciplinaViewComponent]
    });
    fixture = TestBed.createComponent(DisciplinaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
