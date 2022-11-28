import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LerVagasComponent } from './ler-vagas.component';

describe('LerVagasComponent', () => {
  let component: LerVagasComponent;
  let fixture: ComponentFixture<LerVagasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LerVagasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LerVagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
