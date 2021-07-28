import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shelf-create',
  templateUrl: './shelf-create.component.html',
  styleUrls: ['./shelf-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShelfCreateComponent implements OnInit {

  shelf: any = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  saveShelf() {
    this.http.post('/shelf', this.shelf)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/shelf-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }


}