import { Component, OnInit, Input } from '@angular/core';
@Component({
    selector: 'app-repos',
    templateUrl: './repos.component.html',
    styleUrls: ['./repos.component.less']
})
export class ReposComponent implements OnInit {

    @Input() results: any;
    modalParams: any;

    constructor() {}

    ngOnInit() {
        this.modalParams = {
            showModal: false,
            repoName: ''
        };
    }

    showComments(name: string) {
        this.modalParams = {
            showModal: true,
            repoName: name
        };
        console.log('clickonrepo', this.modalParams.repoName, this.modalParams.showModal);
    }

}
