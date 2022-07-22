import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Book } from "../model/books"; 

@Injectable()

export class BooksService
{
    private url = 'https://localhost:5500/APIBookstore/Models/Product.cs';

    httpOptions= {
        Headers: new HttpHeaders({'content-type': 'application/json'})
    }


    constructor(private http:HttpClient){}


    getBook(){

        return this.http.get(this.url)
    }
}
