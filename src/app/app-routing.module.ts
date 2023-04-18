import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page/page.component';
import { LoginComponent } from './login/login.component';
import { guard } from './services/guarder.service';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'login', component: LoginComponent},
  {path:'home', component: HomeComponent, canActivate: [guard]},
  {path:'cart', component: CartComponent, canActivate: [guard]},
  {path:'page/:id', component: PageComponent, canActivate: [guard]},
  {path: 'search/:searchTerm', component: HomeComponent, canActivate: [guard]},
  {path: 'tag/:tag', component: HomeComponent, canActivate: [guard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
