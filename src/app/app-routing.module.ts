import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page/page.component';
import { LoginComponent } from './login/login.component';
import { guard } from './services/guarder.service';
import { CartComponent } from './cart/cart.component';
import { ResolverService } from './services/resolver.service';
import { AddingClothesComponent } from './adding-clothes/adding-clothes.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'adding-clothes', component: AddingClothesComponent , canActivate: [guard] },
  { path: 'home', component: HomeComponent, canActivate: [guard] },
  { path: 'cart', component: CartComponent, canActivate: [guard], resolve: { allClothes: ResolverService } },
  { path: 'page/:id', component: PageComponent, canActivate: [guard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
