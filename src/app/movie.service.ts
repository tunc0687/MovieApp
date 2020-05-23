import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { MovieList } from './movie.datasource';
import { Observable, of} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MovieService {

    constructor() { }

    getMovies(): Observable<Movie[]> {
        return of(MovieList);
    }

}
