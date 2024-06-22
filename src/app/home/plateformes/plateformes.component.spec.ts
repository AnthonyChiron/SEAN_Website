import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlateformesComponent } from './plateformes.component';

describe('ServicesComponent', () => {
  let component: PlateformesComponent;
  let fixture: ComponentFixture<PlateformesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlateformesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlateformesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
