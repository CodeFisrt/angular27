import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetApiCallComponent } from './get-api-call.component';

describe('GetApiCallComponent', () => {
  let component: GetApiCallComponent;
  let fixture: ComponentFixture<GetApiCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetApiCallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetApiCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
