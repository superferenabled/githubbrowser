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
    private searchTerm2$ = new Subject<string>();
    private results: any = undefined;
    private loading = false;

    constructor(private searchService: ReposService) {
        this.activateSearch();
    }

    searchFree() {
        this.activateSearch();
    }

    searchByUser() {
        this.activateSearch(false);
    }

    activateSearch(freeSearch: boolean = true) {
        const currentPromise = freeSearch ? this.searchService.search(this.searchTerm$) : this.searchService.search2(this.searchTerm2$);
        currentPromise
            .pipe(
                tap( () => {
                    this.loading = true;
                }),
                catchError(error => {
                    this.activateSearch(freeSearch);
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
