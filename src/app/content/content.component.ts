import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheckCircle, faChevronDown, faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';
import flowersdata from './data.json'
@Component({
  selector: 'app-content',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class ContentComponent {

  faSearch = faSearch
  faXmark= faXmark
  faChevronDown = faChevronDown
  faCheckCircle = faCheckCircle
  items = flowersdata;
  showSort = false;
  categories: { id : number, name : string, color :string}[] = [{id:1, name:'e-Voucher', color:'Active'},
    {id:2, name:'Products', color:'NActive'},{id:3, name:'Evergreen', color:'NActive'},{id:4, name:'Fashion & Retail', color:'NActive'}]

  numbers : number[] = [...Array(30).keys()].map(i => i + 1);
  toggleSort() {
    this.showSort = !this.showSort;
  }

  resetAll() {
    this.items = flowersdata;
  }

  sortItems(order: string) {
    if (order === 'asc') {
      this.items.sort();
    } else {
      this.items.sort().reverse();
    }
  }

  applySort() {
    this.showSort = false;
  }
}
