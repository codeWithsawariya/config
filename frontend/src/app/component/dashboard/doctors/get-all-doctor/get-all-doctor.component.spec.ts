import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllDoctorComponent } from './get-all-doctor.component';

describe('GetAllDoctorComponent', () => {
  let component: GetAllDoctorComponent;
  let fixture: ComponentFixture<GetAllDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllDoctorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
