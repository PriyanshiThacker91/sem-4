import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

}

// import { Component, OnInit } from '@angular/core';

// import { CatgoryServiceService } from '../catgory-service.service';

// @Component({
//   selector: 'app-category',
//   templateUrl: './category.component.html',
//   styleUrls: ['./category.component.css'],
// })
// export class CategoryComponent implements OnInit {
//   categories: any[] = [];

//   constructor(private categoryService: CatgoryServiceService) {}

//   ngOnInit(): void {
  
//     this.loadCategories();
//   }

//   loadCategories(): void {
//     this.categoryService.getCategories().subscribe(
//       (data) => {
//         this.categories = data;
//       },
//       (error) => {
//         console.error('Error fetching categories:', error);
//       }
//     );
//   }
// }

