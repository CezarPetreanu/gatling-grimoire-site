import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheGrimoirePageComponent } from './the-grimoire-page.component';

describe('TheGrimoirePageComponent', () => {
  let component: TheGrimoirePageComponent;
  let fixture: ComponentFixture<TheGrimoirePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheGrimoirePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheGrimoirePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
