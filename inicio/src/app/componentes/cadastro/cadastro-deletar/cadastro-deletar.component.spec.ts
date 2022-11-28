import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDeletarComponent } from './cadastro-deletar.component';

describe('CadastroDeletarComponent', () => {
  let component: CadastroDeletarComponent;
  let fixture: ComponentFixture<CadastroDeletarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroDeletarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroDeletarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
