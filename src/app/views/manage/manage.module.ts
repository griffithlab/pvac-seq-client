import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { ManageComponent } from './manage.component';
import { ManageRoutingModule } from './manage-routing.module';

@NgModule({
    imports: [
        ManageRoutingModule,
    ],
  declarations: [ManageComponent]
})
export class ManageModule { }
