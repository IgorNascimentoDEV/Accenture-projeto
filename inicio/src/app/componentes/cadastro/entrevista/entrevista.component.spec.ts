import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrevistaComponent } from './entrevista.component';

describe('EntrevistaComponent', () => {
  let component: EntrevistaComponent;
  let fixture: ComponentFixture<EntrevistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrevistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrevistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
