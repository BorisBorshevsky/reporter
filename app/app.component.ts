import {Component} from "angular2/core";
import {ProductListComponent} from "./products/ProductList.component";

@Component({
    selector: "pm-app",
    template: `<div><h1>{{pageTitle}}</h1>
        <pm-products></pm-products>
    </div>`,
    directives: [ProductListComponent]
})
export class AppComponent {
    pageTitle:string = "Page title here"
}
