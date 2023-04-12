import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharComponentComponent } from './shar-component.component';

describe('SharComponentComponent', () => {
  let component: SharComponentComponent;
  let fixture: ComponentFixture<SharComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
