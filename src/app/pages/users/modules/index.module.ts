import {NgModule} from '@angular/core'

import {SharedModule} from '../../../shared/shared.module'

import {UsersComponent} from '../users.component'
// Custom Local Components
import {CreateOrUpdateComponent} from '../components/create-or-update/create-or-update.component'
import {FilterComponent} from '../components/filter/filter.component'

@NgModule({
  imports: [SharedModule],
  declarations: [UsersComponent, CreateOrUpdateComponent, FilterComponent],
  providers: []
})
export class UsersModule {}
