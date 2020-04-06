import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  searchForm = new FormGroup({
    searchString: new FormControl('', [
      Validators.required
    ]),
  })

  private searchString: String

  constructor() { }

  onSearch() {
    this.searchString = this.searchForm.value.searchString
  }

  ngOnInit(): void {
  }

}
