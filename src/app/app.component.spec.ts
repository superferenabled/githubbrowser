import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ReposComponent } from './repos/repos.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CommentsModalComponent } from './comments-modal/comments-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ReposService } from './repos.service';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                ReposComponent,
                SearchBarComponent,
                CommentsModalComponent
            ],
            imports: [
                HttpClientModule,
                FormsModule
            ],
            providers: [ReposService]
        }).compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    /* it(`should have as title 'Github Browser'`, async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('Github Browser');
    })); */
    /*it('should render title in a h1 tag', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Welcome to Github Browser!');
    }));*/
});
