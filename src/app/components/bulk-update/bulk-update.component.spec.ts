import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkUpdateComponent } from './bulk-update.component';

describe('BulkUpdateComponent', () => {
  let component: BulkUpdateComponent;
  let fixture: ComponentFixture<BulkUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BulkUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BulkUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
