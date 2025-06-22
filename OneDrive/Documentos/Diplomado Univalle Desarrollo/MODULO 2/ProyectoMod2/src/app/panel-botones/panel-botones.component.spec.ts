import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelBotonesComponent } from './panel-botones.component';

describe('PanelBotonesComponent', () => {
  let component: PanelBotonesComponent;
  let fixture: ComponentFixture<PanelBotonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelBotonesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelBotonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
