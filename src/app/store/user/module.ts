import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {EffectsModule} from '@ngrx/effects'
import {StoreModule} from '@ngrx/store'
import {Effects} from './effects'
import {reducer} from './reducer'
import {FEATURE_KEY_USER} from './types'

@NgModule({
  imports: [CommonModule, StoreModule.forFeature(FEATURE_KEY_USER, reducer), EffectsModule.forFeature([Effects])],
  declarations: []
})
export class UserStoreModule {}
