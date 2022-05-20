import {StoreDevtoolsModule} from '@ngrx/store-devtools'

export const StoreDevModules = [
  StoreDevtoolsModule.instrument({
    name: 'Demo Angular Crud',
    maxAge: 25 // Retains last 25 states
  })
]
