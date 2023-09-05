import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoObservableComponent } from './demo-observable.component';

describe('DemoObservableComponent', () => {
  let component: DemoObservableComponent;
  let fixture: ComponentFixture<DemoObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoObservableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
