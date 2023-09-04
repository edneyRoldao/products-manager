import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Product } from "../models/product.model";

@Injectable()
export class ProductService {

    baseURL = 'http://localhost:3030/products'

    private totalSubject = new BehaviorSubject(0)
    getTotalProducts = this.totalSubject.asObservable()

    constructor(private httpClient: HttpClient) {}

    getProductById(id: string): Observable<Product> {
        return this.httpClient.get<Product>(`${this.baseURL}/${id}`)
    }

    getProducts(): Observable<Product[]> {
        return this.httpClient.get<Product[]>(this.baseURL)
    }

    setTotalProducts(total: number): void {
        this.totalSubject.next(total)
    }

    createOrUpdateProduct(product: Product): Observable<any>  {
        if (!product.id)
            return this.httpClient.post<any>(this.baseURL, product)
        return this.httpClient.put<any>(this.baseURL, product)        
    }

    deleteProduct(id: number): Observable<any> {
        return this.httpClient.delete<any>(`${this.baseURL}/${id}`)
    }

}
