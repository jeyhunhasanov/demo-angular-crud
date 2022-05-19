import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {StoreModule} from '@ngrx/store'
import {reducer} from './reducer'
import {FEATURE_KEY_PAGINATION} from './types'

@NgModule({
  imports: [CommonModule, StoreModule.forFeature(FEATURE_KEY_PAGINATION, reducer)],
  declarations: []
})
export class PaginationStoreModule {}
