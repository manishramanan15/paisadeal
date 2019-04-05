import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturePlaylistComponent } from './feature-playlist.component';

describe('FeaturePlaylistComponent', () => {
  let component: FeaturePlaylistComponent;
  let fixture: ComponentFixture<FeaturePlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturePlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturePlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
