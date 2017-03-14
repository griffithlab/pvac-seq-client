import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

// Store
import { provideStore } from '@ngrx/store';
import { AppState, INITIAL_APPLICATION_STATE } from './store/models/app.model';
import { rootReducer } from './store/reducers/root.reducer';

import { ConfigService } from './services/config.service';
import { SwaggerApiService } from './services/swagger-api.service';

// App Modules
import { AppRoutingModule } from './app.routing';
import { ServicesModule } from './services/services.module';
import { StoreModule } from './store/store.module';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';

// Components
import { AppComponent } from './app.component';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServicesModule,
    StoreModule
  ],
  declarations: [
    AppComponent,
    FullLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    provideStore(rootReducer, INITIAL_APPLICATION_STATE)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
