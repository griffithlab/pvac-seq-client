import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Store
import { StoreModule } from '@ngrx/store';
import { RouterStoreModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { INITIAL_APPLICATION_STATE } from './store/models/app.model';
import { rootReducer } from './store/root.reducer';

import { combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { storeReducer } from './store/reducers/store.reducer';
import { uiReducer } from './store/reducers/ui.reducer';
import { storeFreeze } from 'ngrx-store-freeze';


import {
  LoadProcessesEffectService,
  LoadProcessEffectService,
  ArchiveProcessEffectService,
  StartProcessEffectService,
  LoadInputsEffectService,
  LoadFilesEffectService,
} from './store/effects/store.effects';

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
  EffectsModule.run(LoadProcessEffectService),
  EffectsModule.run(ArchiveProcessEffectService),
  EffectsModule.run(StartProcessEffectService),
  EffectsModule.run(LoadInputsEffectService),
  EffectsModule.run(LoadFilesEffectService),
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ServicesModule,
    StoreModule.provideStore(rootReducer, INITIAL_APPLICATION_STATE),
    RouterStoreModule.connectRouter(),
    storeEffects,
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
