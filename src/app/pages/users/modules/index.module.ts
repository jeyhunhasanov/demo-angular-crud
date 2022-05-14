import {NgModule} from '@angular/core'

import {UsersComponent} from '../users.component'
import {FlexLayoutModule} from '@angular/flex-layout'
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {MatDividerModule} from '@angular/material/divider'
import {MatTableModule} from '@angular/material/table'
import {MatSortModule} from '@angular/material/sort'
import {MatPaginatorModule} from '@angular/material/paginator'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {ReactiveFormsModule} from '@angular/forms'
import {CommonModule} from '@angular/common'
import {MatRadioModule} from '@angular/material/radio'
import {MatTooltipModule} from '@angular/material/tooltip'

@NgModule({
  imports: [
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    CommonModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatRadioModule,
    MatSortModule,
    MatTableModule,
    MatTooltipModule
  ],
  declarations: [UsersComponent],
  providers: []
})
export class UsersModule {}
