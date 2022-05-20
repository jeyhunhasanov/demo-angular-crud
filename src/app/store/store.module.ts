import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {EffectsModule} from '@ngrx/effects'
import {StoreModule} from '@ngrx/store'

import {UserStoreModule} from './user'
import {PaginationStoreModule} from './pagination'
import {StoreDevModules} from '../config/devtools/devtool'

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevModules,
    UserStoreModule,
    PaginationStoreModule
  ],
  declarations: []
})
export class RootStoreModule {}
