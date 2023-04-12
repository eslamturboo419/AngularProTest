import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRecativeFormComponent } from './login-recative-form.component';

describe('LoginRecativeFormComponent', () => {
  let component: LoginRecativeFormComponent;
  let fixture: ComponentFixture<LoginRecativeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginRecativeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginRecativeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
