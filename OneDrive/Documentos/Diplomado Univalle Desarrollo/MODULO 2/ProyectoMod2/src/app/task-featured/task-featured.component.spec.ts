import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFeaturedComponent } from './task-featured.component';

describe('TaskFeaturedComponent', () => {
  let component: TaskFeaturedComponent;
  let fixture: ComponentFixture<TaskFeaturedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskFeaturedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
