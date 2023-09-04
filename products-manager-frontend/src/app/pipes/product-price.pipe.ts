import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'prdprice'})
export class ProductPricePipe implements PipeTransform {
    transform(price: number): string {
        return '$ ' + price
    }
}
