import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoAsObservableComponent } from './demo-as-observable.component';

describe('DemoAsObservableComponent', () => {
  let component: DemoAsObservableComponent;
  let fixture: ComponentFixture<DemoAsObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoAsObservableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoAsObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
