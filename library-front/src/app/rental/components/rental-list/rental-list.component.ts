import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/book/models/book';
import { Person } from 'src/app/person/model/person';
import { Rental } from '../../model/rental';
import { RentalService } from '../../service/rental.service';


@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {

  person!: Person[];
  rental!: Rental[];
  book!: Book[];

  constructor(private rds: RentalService, private router: Router) { }

  ngOnInit(){
    this.rds.getRentalList().subscribe(data =>  {
      this.rental = data,
      console.log(data); 
    });
    
    
  }

  addNew() {
    this.router.navigate(['/rental/add']);
  }

}
