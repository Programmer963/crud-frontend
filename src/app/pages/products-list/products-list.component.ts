import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];

  newProduct: Product = {
    name: '',
    description: '',
    price: 0
  };

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAll().subscribe(data => {
      this.products = data;
    });
  }

  getProductById(id: number) {
    this.productService.getById(id).subscribe((product) => {
      console.log('Получен продукт:', product);
    })
  }

  createProduct() {
    this.productService.create(this.newProduct).subscribe((created) => {
      console.log('Создан продукт:', created);
      this.getAllProducts();

      this.newProduct = {
        name: '',
        description: '',
        price: 0
      };
    });
  }

  updateProduct(product: Product) {
    const updatedProduct = { ...product, price: product.price + 10 };

    this.productService.update(product.id!, updatedProduct).subscribe((updated) => {
      console.log('Обновлен продукт:', updated);
      this.getAllProducts();
    });
  }

  deleteProduct(id: number) {
    this.productService.delete(id).subscribe(() => {
      console.log('Удален продукт:', id);
      this.getAllProducts();
    });
  }
}
