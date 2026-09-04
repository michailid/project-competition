import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSubmissions } from './project-submissions';

describe('ProjectSubmissions', () => {
  let component: ProjectSubmissions;
  let fixture: ComponentFixture<ProjectSubmissions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectSubmissions],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectSubmissions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
