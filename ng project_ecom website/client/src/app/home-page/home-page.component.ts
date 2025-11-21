import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { CategoryComponent } from '../category/category.component';
import { BestSellingProductsComponent } from '../best-selling-products/best-selling-products.component';
import { MostPopularProductsComponent } from '../most-popular-products/most-popular-products.component';
import { JustArrivedComponent } from '../just-arrived/just-arrived.component';
import { OurRecentBlogComponent } from '../our-recent-blog/our-recent-blog.component';
import { DiscountAndSubmitComponent } from '../discount-and-submit/discount-and-submit.component';
import { SaleAndDiscountComponent } from '../sale-and-discount/sale-and-discount.component';
import { FeaturedProductsComponent } from '../featured-products/featured-products.component';
import { OrangeTemplateFooterComponent } from '../orange-template-footer/orange-template-footer.component';
import { PeopleAreAlsoLookingForComponent } from '../people-are-also-looking-for/people-are-also-looking-for.component';
import { FreeDeliveryDailyOffersFooterComponent } from '../free-delivery-daily-offers-footer/free-delivery-daily-offers-footer.component';

@Component({
  selector: 'app-home-page',
  imports: [HomeComponent,CategoryComponent,BestSellingProductsComponent,MostPopularProductsComponent,JustArrivedComponent,OurRecentBlogComponent,MostPopularProductsComponent,DiscountAndSubmitComponent,SaleAndDiscountComponent,FeaturedProductsComponent,OrangeTemplateFooterComponent,PeopleAreAlsoLookingForComponent,FreeDeliveryDailyOffersFooterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
