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
  selectedCategories : any=[];
  categories: { id : number, name : string, color :string}[] = 
  [{id:1, name:'e-Voucher', color:'Active'},
    {id:2, name:'Products', color:'NActive'},{id:3, name:'Evergreen', color:'NActive'},{id:4, name:'Fashion & Retail', color:'NActive'}]
  
    initializeCategories (){
      const uniquecategories = new Set(flowersdata.map(item => item.category))
      this.categories = Array.from(uniquecategories).map((cat,i) => ({id : i+1, name: cat,color : "NActive" }))
    }
  numbers : number[] = [...Array(30).keys()].map(i => i + 1);
  toggleSort() {
    this.showSort = !this.showSort;
  }
  ngOnInit() {
    this.initializeCategories()
    this.updateSelectedCategories()
 }

  sortItems(order: string) {
    if (order === 'asc') {
      this.items.sort();
    } else {
      this.items.sort().reverse();
    }
  }

  resetAll() {
    this.items = flowersdata;
  }
  toggleCategorySelection(id: number): void {
    const category = this.categories.find(cat => cat.id === id);
    if (category) {
      category.color = category.color === 'Active' ? 'NActive' : 'Active';
      this.updateSelectedCategories();
      this.filterItems()
    }
  }

  updateSelectedCategories(): void {
    this.selectedCategories = this.categories
      .filter(cat => cat.color === 'Active')
      .map(cat => cat.name);
    // this.selectedCategories.push('clear filters');
  }
  filterItems(){
    this.items = flowersdata.filter(item => this.selectedCategories.includes(item.category))
  }
   removeFilter(catname : string){
     const category = this.categories.find(cat => cat.name === catname)
     if(category){
      category.color= 'NActive';
      this.updateSelectedCategories()
     }
   }

   clearAllFilters(){
    this.categories.forEach(cat=> cat.color= "NActive")
    this.updateSelectedCategories()
   }
  applySort() {
    this.showSort = false;
  }
}
