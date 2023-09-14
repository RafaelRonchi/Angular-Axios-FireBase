import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregacaoComponent } from './agregacao.component';

describe('AgregacaoComponent', () => {
  let component: AgregacaoComponent;
  let fixture: ComponentFixture<AgregacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregacaoComponent]
    });
    fixture = TestBed.createComponent(AgregacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
