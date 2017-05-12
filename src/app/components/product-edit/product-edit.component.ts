import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-product-edit',
  // encapsulation: ViewEncapsulation.Emulated,
  templateUrl: './product-edit.component.html',
  // styles: ['.pec-style { color: blue; }']
  styleUrls: ['./product-edit.component.css']
  // host: {
  //   'style': 'color: orange;'
  // }
})
export class ProductEditComponent implements OnInit {
  // @HostBinding('style.background-color') color = 'orange';

  constructor() {
    // window.setInterval(() => { this.color = this.color === 'lightblue' ? 'orange' : 'lightblue'; }, 1000);
  }

  ngOnInit() {
  }

}
