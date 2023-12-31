import { Pipe, PipeTransform } from "@angular/core";
import { Products } from '../models/models';
@Pipe({
    name: "filtro"
})
export class FiltroPipe implements PipeTransform{
    transform(products: Products[], nombre: string): Products[] {
        console.log(products)
        console.log(nombre)
        if (!products || !nombre){
            return products
        }
        return products.filter(product =>
            product.product.toLowerCase().includes(nombre.toLowerCase())
        )
    }
}