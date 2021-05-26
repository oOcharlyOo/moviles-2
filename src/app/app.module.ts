import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes,RouterModule, RouterLink} from '@angular/router'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule} from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { InicioComponent } from './inicio/inicio.component';
import { AcercaComponent } from './acerca/acerca.component';
import { ContactoComponent } from './contacto/contacto.component';
import { Page404Component } from './page404/page404.component';


const approutes: Routes=[
  
  
  {path: 'inicio', component: InicioComponent},
  {path:'acerca', component: AcercaComponent},
  {path: 'contacto', component: ContactoComponent},
  {path:'**', component: Page404Component}

];

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    InicioComponent,
    AcercaComponent,
    ContactoComponent,
    Page404Component
  
  ],
  imports: [
    RouterModule.forRoot(approutes),

    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,    
    MatInputModule, 
    MatSelectModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
