import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CartComponent } from './components/cart/cart.component';
import { SuccessComponent } from './components/success/success.component';
import { BuynowComponent } from './components/buynow/buynow.component';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { FashionComponent } from './components/fashion/fashion.component';
import { JewelleryComponent } from './components/jewellery/jewellery.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { SportsComponent } from './components/sports/sports.component';
import { LiquorsComponent } from './components/liquors/liquors.component';
import { BooksComponent } from './components/books/books.component';
import { BeautyComponent } from './components/beauty/beauty.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';




const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'cart', component: CartComponent },
  { path: 'electronics', component: ElectronicsComponent },
  { path: 'fashion', component: FashionComponent },
  { path: 'kitchen', component: KitchenComponent },
  { path: 'books', component: BooksComponent },
  { path: 'jewellery', component: JewelleryComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'buynow', component: BuynowComponent },
  { path: 'sports', component: SportsComponent },
  { path: 'beauty', component: BeautyComponent },
  { path: 'liquors', component: LiquorsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}

];




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CartComponent,
    SuccessComponent,
    BuynowComponent,
    ElectronicsComponent,
    FashionComponent,
    JewelleryComponent,
    KitchenComponent,
    SportsComponent,
    LiquorsComponent,
    BooksComponent,
    BeautyComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
