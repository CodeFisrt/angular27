import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlFlowStatmentComponent } from './control-flow-statment.component';

describe('ControlFlowStatmentComponent', () => {
  let component: ControlFlowStatmentComponent;
  let fixture: ComponentFixture<ControlFlowStatmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlFlowStatmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlFlowStatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
