import { Component, ViewChild } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { ReposComponent } from '../repos/repos.component';
import { ReposService } from '../repos.service';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.less']
})
export class SearchBarComponent {
    @ViewChild(ReposComponent) reposChild: ReposComponent;

    private searchTerm$ = new Subject<string>();
    private results: any = undefined;
    private loading = false;

    constructor(private searchService: ReposService) {
        this.activateSearch();
    }

    activateSearch() {
        this.searchService.search(this.searchTerm$)
            .pipe(
                tap( () => {
                    this.loading = true;
                }),
                catchError(error => {
                    this.activateSearch();
                    this.loading = false;
                    this.results = undefined;
                    return Subject.create();
                })
            )
            .subscribe(results => {
                this.loading = false;
                this.results = results;
            });
    }

}
