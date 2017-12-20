import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposComponent } from './repos.component';
import { CommentsModalComponent } from '../comments-modal/comments-modal.component';
import { ReposService } from '../repos.service';
import { HttpClientModule } from '@angular/common/http';

describe('ReposComponent', () => {
    let component: ReposComponent;
    let fixture: ComponentFixture<ReposComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ReposComponent,
                CommentsModalComponent
            ],
            imports: [
                HttpClientModule
            ],
            providers: [ReposService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ReposComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
