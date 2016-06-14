import {Injectable} from "angular2/core";
import {IProduct} from "./product";
import {Http, Response} from "angular2/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ProductService {
	private _productsUrl = "./api/products/products.json";
	constructor(private _http:Http) {
	}

	getProducts():Observable<Array<IProduct>>{
		return this._http.get(this._productsUrl).map(resp => resp.json())
			.do(x => console.log("all: " + x))
			.catch(this.handleError);
	}

	private handleError(err : Response){
		console.error(err);
		return Observable.throw(err.json().error || "server error")
	}

}