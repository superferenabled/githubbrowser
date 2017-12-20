import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ReposComponent } from './repos/repos.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CommentsModalComponent } from './comments-modal/comments-modal.component';

import { ReposService } from './repos.service';


@NgModule({
    declarations: [
        AppComponent,
        ReposComponent,
        SearchBarComponent,
        CommentsModalComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [ReposService],
    bootstrap: [AppComponent]
})
export class AppModule { }
