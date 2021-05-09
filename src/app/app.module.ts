import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [		
    AppComponent,
      UserinfoComponent,
      LoginComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
