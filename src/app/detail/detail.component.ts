import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
 
  movie: Movie;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.movieService.getMovie(id).subscribe(movie => {
      this.movie = movie;
    });
  }

  save(): void {
    this.movieService.update(this.movie).subscribe(() => {
      this.location.back();
    });
  }

  delete(): void {
    this.movieService.deleteMovie(this.movie).subscribe(() => {
      this.location.back();
    });
  }

}
