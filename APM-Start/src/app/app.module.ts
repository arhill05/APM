import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { ProductsDetailComponent } from './products/products-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { ProductDetailGuard } from './products/product.detail.guard';
import { ProductsErrorComponent } from './products/products-error.component';
import { EmbedComponent } from './products/embed.component';

@NgModule({
  declarations: [AppComponent, ProductListComponent, ConvertToSpacesPipe, StarComponent, ProductsDetailComponent, WelcomeComponent, ProductsErrorComponent, EmbedComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot([
    { path: 'products', component: ProductListComponent },
    { path: 'products/:id', canActivate: [ProductDetailGuard], component: ProductsDetailComponent },
    { path: 'error', component: ProductsErrorComponent },
    { path: 'welcome', component: WelcomeComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
  ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
