import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { ProductComponent } from './components/product/product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductComponent, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ngOnInit() {
    window.addEventListener('addCart', (e) => console.log(e) )
  }
}
