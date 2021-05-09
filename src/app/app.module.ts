import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserinfoComponent } from './userinfo/userinfo.component';

@NgModule({
  declarations: [	
    AppComponent,
      UserinfoComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
