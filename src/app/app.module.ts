import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {MatGridListModule} from '@angular/material/grid-list';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { CreateOppComponent } from './Components/create-opp/create-opp.component';
import { CreateOppDialogComponent } from './Components/create-opp-dialog/create-opp-dialog.component';
import { OppTableComponent } from './Components/opp-table/opp-table.component';
import { LoginComponent } from './Components/login/login.component';
import { CombineComponent } from './Components/combine/combine.component';
import { HomeComponent } from './Components/home/home.component';
import { EditDialogComponent } from './Components/edit-dialog/edit-dialog.component';
import { TrendsComponent } from './Components/trends/trends.component';

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("582357564087-8duhrjcolj551o8aelivade1ldl0808s.apps.googleusercontent.com")
  }
]);

export function provideConfig() {
  return config;
}
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreateOppComponent,
    CreateOppDialogComponent,
    OppTableComponent,
    LoginComponent,
    CombineComponent,
    HomeComponent,
    EditDialogComponent,
    TrendsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatPaginatorModule,
    MatGridListModule,
    SocialLoginModule,
    MatSelectModule,
    HttpClientModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatMenuModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule
  ],
  entryComponents:[
    CreateOppDialogComponent
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
