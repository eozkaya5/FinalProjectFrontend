import { from } from "rxjs";
import{Product} from "./product";

export class CartItem{
    product:Product;
    quantity:number;
}