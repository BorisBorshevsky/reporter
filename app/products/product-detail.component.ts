import {Component} from "angular2/core";
import {RouteParams, Router} from "angular2/router";


@Component({
	templateUrl: 'app/products/product-detail.component.html'
})
export class ProductDetailComponent{
	constructor(private _routeParam : RouteParams, private _router:Router) {
		this.pageTitle = "Product Detail: " + _routeParam.get("id")

	}

	onBack(){
		this._router.navigate(['Products'])
	}

	pageTitle = "Product Detail"
}
