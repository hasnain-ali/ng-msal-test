import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { MsalModule } from '@azure/msal-angular';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MsalModule.forRoot({
      auth:{
        clientId: "b13c4ebf-ec9c-4feb-931f-96f8ad09be2a",
        authority: "https://contosob2chatest.b2clogin.com/contosob2chatest.onmicrosoft.com/B2C_1_sin_sup",
        validateAuthority: false,
        redirectUri: "http://localhost:4200/"
      },
      cache:{
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: false
      }
    },{
      consentScopes:[
        "user.read","openid","profile"
      ]
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
