import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { environment } from '../environments/environment';

// Store
import { ActionReducer, combineReducers, provideStore } from '@ngrx/store';
import { storeFreeze } from "ngrx-store-freeze";
import { storeLogger } from "ngrx-store-logger";
import { compose } from '@ngrx/core/compose';
import { AppState, INITIAL_APPLICATION_STATE } from './store/models/app.model';
import * as fromProcesses from './store/reducers/process.reducer';
import * as fromUi from './store/reducers/ui.reducer';

// Services
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

// AOT compilation requires a function for the root reducer
// see: https://github.com/ngrx/store/issues/345
const reducers = {
  processes: fromProcesses.processes,
  ui: fromUi.ui
}

const developmentReducer: ActionReducer<AppState> = compose(
  storeLogger(),
  storeFreeze,
  combineReducers
)(reducers);

const productionReducer: ActionReducer<AppState> = combineReducers(reducers);

export function rootReducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

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
