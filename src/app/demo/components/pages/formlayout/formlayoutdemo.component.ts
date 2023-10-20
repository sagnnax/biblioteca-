import { Component } from '@angular/core';
import { Product } from 'src/app/demo/api/product';

@Component({
    templateUrl: './formlayoutdemo.component.html'
})
export class FormLayoutDemoComponent {

    productDialog: boolean = false;
    product: Product = {};
    submitted: boolean = false;
    mostrarFormulario: boolean = false;

    selectedState: any = null;

    dropdownItems = [
        { name: 'Option 1', code: 'Option 1' },
        { name: 'Option 2', code: 'Option 2' },
        { name: 'Option 3', code: 'Option 3' }
    ];

    cities1: any[] = [];

    cities2: any[] = [];

    city1: any = null;

    city2: any = null;

    openNew() {
        this.mostrarFormulario = true;
      }

      closeForm() {
        this.mostrarFormulario = false;
      }

}
