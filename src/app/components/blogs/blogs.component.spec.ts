import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../../app-routing.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogService } from 'src/app/services/blog.service';
import { MockBlogService } from 'src/app/services/mock-blog.service';

import { BlogsComponent } from './blogs.component';

describe('BlogsComponent', () => {
  let component: BlogsComponent;
  let fixture: ComponentFixture<BlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogsComponent ],
      imports: [HttpClientModule, AppRoutingModule],
      providers: [{ provide: BlogService, useClass: MockBlogService }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //get Blog Test from MockBlogService
  it('should have blogs', () => {
    expect(component.blogs.length).toBeGreaterThan(0)
  })
});
