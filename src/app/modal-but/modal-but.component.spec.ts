import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalButComponent } from './modal-but.component';

describe('ModalButComponent', () => {
  let component: ModalButComponent;
  let fixture: ComponentFixture<ModalButComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalButComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalButComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
