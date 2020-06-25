import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurStoriesDetailComponent } from './our-stories-detail.component';

describe('OurStoriesDetailComponent', () => {
  let component: OurStoriesDetailComponent;
  let fixture: ComponentFixture<OurStoriesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurStoriesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurStoriesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
