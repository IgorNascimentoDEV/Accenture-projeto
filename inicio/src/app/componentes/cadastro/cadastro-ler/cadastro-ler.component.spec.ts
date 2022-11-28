import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroLerComponent } from './cadastro-ler.component';

describe('CadastroLerComponent', () => {
  let component: CadastroLerComponent;
  let fixture: ComponentFixture<CadastroLerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroLerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroLerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
