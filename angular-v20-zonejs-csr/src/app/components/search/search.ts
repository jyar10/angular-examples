import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.html',
  styleUrls: ['./search.css']
})
export class Search {
  searchTerm: string = '';
  
  @Output() search = new EventEmitter<string>();

  onSearch() {
    this.search.emit(this.searchTerm.trim());
  }
}
