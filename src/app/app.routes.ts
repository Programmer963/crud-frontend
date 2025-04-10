import { provideRouter, Routes } from '@angular/router';
import { ProductsListComponent } from './pages/products-list/products-list.component';

export const routes: Routes = [
    { path: '', redirectTo: 'products', pathMatch: 'full' },
    { path: 'products', component: ProductsListComponent },
];

export const appRouter = provideRouter(routes);