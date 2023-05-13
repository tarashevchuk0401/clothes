import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageComponent } from './page/page.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { CartComponent } from './cart/cart.component';
import { ResolverService } from './services/resolver.service';
import { AddingClothesComponent } from './adding-clothes/adding-clothes.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PageComponent,
    LoginComponent,
    CartComponent,
    AddingClothesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [AuthService, ResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
