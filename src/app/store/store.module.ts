import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {EffectsModule} from '@ngrx/effects'
import {StoreModule} from '@ngrx/store'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'

import {environment} from '../../environments/environment'

import {UserStoreModule} from './user'
import {PaginationStoreModule} from './pagination'

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production
    }),
    UserStoreModule,
    PaginationStoreModule
  ],
  declarations: []
})
export class RootStoreModule {}
