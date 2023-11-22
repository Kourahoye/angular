import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPComponent } from './section-p.component';

describe('SectionPComponent', () => {
  let component: SectionPComponent;
  let fixture: ComponentFixture<SectionPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionPComponent]
    });
    fixture = TestBed.createComponent(SectionPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
