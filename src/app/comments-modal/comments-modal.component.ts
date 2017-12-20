import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ReposService } from '../repos.service';
import { catchError, tap } from 'rxjs/operators';

@Component({
    selector: 'app-comments-modal',
    templateUrl: './comments-modal.component.html',
    styleUrls: ['./comments-modal.component.less']
})
export class CommentsModalComponent implements OnChanges {
    // @Input() showModal: boolean;
    // @Input().params repoName: string;
    comments: any = undefined;

    @Input() params = {
        showModal: false,
        repoName: ''
    };

    constructor(private searchService: ReposService) {}

    ngOnChanges(changes: SimpleChanges) {
        console.log('onChanges', this.params.repoName, this.params.showModal);
            console.log(changes);
        if (changes['params']) {
            // this.params.showModal = true;
            this.reloadModalContent();
        }
    }

    closeModal() {
        this.params.showModal = false;
    }

    reloadModalContent() {
        this.comments = undefined;
        console.log('reloadModalContent', this.params.repoName, this.params.showModal);
        if (this.params.showModal && this.params.repoName.length) {
            this.searchService.getComments(this.params.repoName)
                .subscribe(results => {
                    this.comments = results;
                    this.comments.forEach(comment => {
                        comment.mood = 'neutral';
                        this.searchService.getMood(comment.body)
                            .subscribe((mood: any) => {
                                console.log(mood.label);
                                comment.mood = mood.label;
                            });
                    });
                });
        }
    }
}
