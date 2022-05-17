import {NgModule} from '@angular/core'

import {SharedModule} from '../../../shared/shared.module'

import {UsersComponent} from '../users.component'
// Custom Local Components
import {CreateOrUpdateComponent} from '../components/create-or-update/create-or-update.component'
import {FilterComponent} from '../components/filter/filter.component'
import {FormsModule} from '@angular/forms'

@NgModule({
  imports: [SharedModule, FormsModule],
  declarations: [UsersComponent, CreateOrUpdateComponent, FilterComponent],
  providers: []
})
export class UsersModule {}
