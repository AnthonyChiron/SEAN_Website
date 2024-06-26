import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivePlusComponent } from './plus.component';

describe('ProjetsComponent', () => {
  let component: LivePlusComponent;
  let fixture: ComponentFixture<LivePlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivePlusComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LivePlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
