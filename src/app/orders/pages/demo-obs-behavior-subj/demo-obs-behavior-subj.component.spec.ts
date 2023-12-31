import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoObsBehaviorSubjComponent } from './demo-obs-behavior-subj.component';

describe('DemoObsBehaviorSubjComponent', () => {
  let component: DemoObsBehaviorSubjComponent;
  let fixture: ComponentFixture<DemoObsBehaviorSubjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoObsBehaviorSubjComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoObsBehaviorSubjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
