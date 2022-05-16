import {Component, OnInit} from '@angular/core'
import {FormControl, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  formSearch = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    gender: new FormControl(''),
    status: new FormControl('')
  })

  constructor() {}

  ngOnInit(): void {}

  handleSubmitBtnSearch() {
    if (this.formSearch.valid) {
      console.log('Search form data: ', this.formSearch.value)
    }
  }
}
