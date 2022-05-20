import {Component, Inject, OnInit} from '@angular/core'
import {MAT_DIALOG_DATA} from '@angular/material/dialog'

interface IDialogData {
  title: string
  component: any
  message: string
  hasActions: boolean
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: IDialogData) {}

  ngOnInit(): void {}
}
