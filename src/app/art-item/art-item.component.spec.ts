import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtItemComponent } from './art-item.component';

describe('ArtItemComponent', () => {
  let component: ArtItemComponent;
  let fixture: ComponentFixture<ArtItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtItemComponent]
    });
    fixture = TestBed.createComponent(ArtItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
