import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { CreateOppComponent } from './create-opp/create-opp.component';
import { CreateOppDialogComponent } from './create-opp-dialog/create-opp-dialog.component';
import { OppTableComponent } from './opp-table/opp-table.component';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CombineComponent } from './combine/combine.component';
import { HomeComponent } from './home/home.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { TrendsComponent } from './trends/trends.component';

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
