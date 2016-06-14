import {Component, OnInit} from "angular2/core";
import {IProduct} from "./product";
import {ProductFileterPipe} from "./products-filter.pipe";
import {StarComponent} from "../shared/star.component";
import {ProductService} from "./product.service";
import {ROUTER_DIRECTIVES} from "angular2/router";
/**
 * Created by user on 6/11/2016.
 */

@Component({
	selector: 'pm-products',
	templateUrl: 'app/products/product-list.component.html',
	styleUrls: ['app/products/product-list.component.css'],
	pipes: [ProductFileterPipe],
	directives: [StarComponent, ROUTER_DIRECTIVES]
})
export class ProductListComponent implements OnInit {

	constructor(private _productService: ProductService) {
	}

	pageTitle:string = "Product List";
	imageWidth = 50;
	imageMargin = 2;
	showImage = false;
	listFilter = "";
	products:Array<IProduct>;
	errorMessage: string

	toggleImage():void {
		this.showImage = !this.showImage;
		this._productService.getProducts()
	}

	ngOnInit():void {
		this._productService.getProducts().subscribe(
			products => this.products = products,
			error => this.errorMessage = error
		);
	}

	onRatingClicked(msg) {
		console.log(msg + " from product");
	}

}

