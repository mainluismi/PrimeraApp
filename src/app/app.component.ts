import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgOptimizedImage } from '@angular/common';
import { Product } from './components/models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PrimeraApp';
  http = inject(HttpClient);
  products: Product[] = [];

  changeTitle(){
    this.title = 'changed';
  }

  ngOnInit(){
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products').
    subscribe((data: any) => {
      this.products = data;
    });
  }
}
