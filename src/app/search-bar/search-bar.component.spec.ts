import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { SearchBarComponent } from './search-bar.component';
import { ReposService } from '../repos.service';
import { ReposComponent } from '../repos/repos.component';
import { CommentsModalComponent } from '../comments-modal/comments-modal.component';

describe('SearchBarComponent', () => {
    let component: SearchBarComponent;
    let fixture: ComponentFixture<SearchBarComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [
                    SearchBarComponent,
                    ReposComponent,
                    CommentsModalComponent
                ],
                imports: [
                    HttpClientModule
                ],
                providers: [ReposService]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
