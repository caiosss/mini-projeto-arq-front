import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoViewComponent } from './aluno-view.component';

describe('AlunoViewComponent', () => {
  let component: AlunoViewComponent;
  let fixture: ComponentFixture<AlunoViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlunoViewComponent]
    });
    fixture = TestBed.createComponent(AlunoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
