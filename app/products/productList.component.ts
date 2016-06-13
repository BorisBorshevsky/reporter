import {Component, OnInit} from "angular2/core";
import {IProduct} from "./product";
import {ProductFileterPipe} from "./products-filter.pipe";
import {StarComponent} from "../shared/star.component";
/**
 * Created by user on 6/11/2016.
 */

@Component({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css'],
    pipes: [ProductFileterPipe],
    directives: [StarComponent]
})
export class ProductListComponent implements OnInit {

    pageTitle:string = "Product List";
    imageWidth = 50;
    imageMargin = 2;
    showImage = false;
    listFilter = "cart";
    products:Array<IProduct> = [
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        },
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        }
    ];

    toggleImage():void {
        this.showImage = !this.showImage;
    }

    ngOnInit():void {
        console.log("on init")
    }

    onRatingClicked(msg) {
        console.log(msg + " from product");
    }

}

