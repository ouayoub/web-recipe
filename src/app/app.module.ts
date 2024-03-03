import { NgModule } from '@angular/core'; 
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { FirstSectionComponent } from './first-section/first-section.component';
import { ModalButComponent } from './modal-but/modal-but.component';
import { PanelSectionComponent } from './panel-section/panel-section.component';
import { MenuSectionComponent } from './menu-section/menu-section.component';



@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    FirstSectionComponent,
    ModalButComponent,
    PanelSectionComponent,
    MenuSectionComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
