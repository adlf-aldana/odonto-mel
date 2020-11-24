import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservarAtencionComponent } from './reservar-atencion.component';

describe('ReservarAtencionComponent', () => {
  let component: ReservarAtencionComponent;
  let fixture: ComponentFixture<ReservarAtencionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservarAtencionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservarAtencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
