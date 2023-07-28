import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav.component';
import { MainContentComponent } from './main-content.component';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    MainContentComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
