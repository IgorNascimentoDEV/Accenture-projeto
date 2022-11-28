import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmholdComponent } from './omhold.component';

describe('OmholdComponent', () => {
  let component: OmholdComponent;
  let fixture: ComponentFixture<OmholdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmholdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OmholdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
