import { TestBed, inject } from '@angular/core/testing';

import { ReposService } from './repos.service';
import { HttpClientModule } from '@angular/common/http';

describe('ReposService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ReposService],
            imports: [
                HttpClientModule
            ],
        });
    });

    it('should be created', inject([ReposService], (service: ReposService) => {
        expect(service).toBeTruthy();
    }));
});
