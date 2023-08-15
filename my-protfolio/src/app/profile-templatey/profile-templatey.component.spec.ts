import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTemplateyComponent } from './profile-templatey.component';

describe('ProfileTemplateyComponent', () => {
  let component: ProfileTemplateyComponent;
  let fixture: ComponentFixture<ProfileTemplateyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileTemplateyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileTemplateyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
