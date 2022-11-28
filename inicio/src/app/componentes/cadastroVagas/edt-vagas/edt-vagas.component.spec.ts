import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdtVagasComponent } from './edt-vagas.component';

describe('EdtVagasComponent', () => {
  let component: EdtVagasComponent;
  let fixture: ComponentFixture<EdtVagasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdtVagasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdtVagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
