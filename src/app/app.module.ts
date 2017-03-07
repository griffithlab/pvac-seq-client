import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { provideStore } from '@ngrx/store';
import { AppComponent } from './app.component';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';

import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';

// Services
import { ConfigService } from './services/config.service';
import { SwaggerApiService } from './services/swagger-api.service';

// Routing Module
import { AppRoutingModule } from './app.routing';

// Services Module
import { ServicesModule } from './services/services.module';

//Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServicesModule
  ],
  declarations: [
    AppComponent,
    FullLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
