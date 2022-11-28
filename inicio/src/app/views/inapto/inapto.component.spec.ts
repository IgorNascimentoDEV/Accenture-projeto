import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InaptoComponent } from './inapto.component';

describe('InaptoComponent', () => {
  let component: InaptoComponent;
  let fixture: ComponentFixture<InaptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InaptoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InaptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
