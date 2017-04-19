import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Store
import { provideStore } from '@ngrx/store';
import { EffectsModule } from "@ngrx/effects";
import { INITIAL_APPLICATION_STATE } from './store/models/app.model';
import { rootReducer } from './store/root.reducer';
import { LoadProcessesEffectService } from './store/effects/store.effects';

// App Modules
import { AppRoutingModule } from './app.routing';
import { ServicesModule } from './services/services.module';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';

// Components
import { AppComponent } from './app.component';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';

const storeEffects = [
  EffectsModule.run(LoadProcessesEffectService),
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ServicesModule,
    storeEffects,
  ],
  declarations: [
    AppComponent,
    FullLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective
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
