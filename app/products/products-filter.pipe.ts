import {Pipe, PipeTransform} from "angular2/core";
import {IProduct} from "./product";
@Pipe({
    name: "productFilter"
})
export class ProductFileterPipe implements PipeTransform {
    transform(value:Array<IProduct>, args:Array<string>):Array<IProduct> {
        let filter = args[0] ? args[0].toLocaleLowerCase() : null;
        return filter ? value.filter(p => p.productName.toLowerCase().indexOf(filter) != -1) : value;
    }

}
