import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { /* TODO document why this constructor is empty */ 
    
   }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  
  }
  enteredSearchValue:string='';
  
  @Output()
  searchTextChanged:EventEmitter<string>=new EventEmitter<string>();
  onSearchTextChanged(){
    this.searchTextChanged.emit(this.enteredSearchValue);

  }

}
