import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  public keyUp = new Subject<any>();
  public searchKey = '';
  public products = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    /*
      API endpoint to consume - HTTP GET `https://dummyjson.com/products/search?q={searchKey}`

      Refer to the following steps for the exercise 

       1. You need to read the input from the search-component on user keyUp
       2. The input value should be passed to the API to obtain a response
       3. The response array should be passed to the display component and displayed
       one after the other in a simple <li> product.title </li> tag. 
       4. Use the product title from the API response to display in the html page

       Additional Requirements

       1. Manage subscriptions to avoid memory leaks 
       2. Usage of rxjs operators, subjects and observables to the best use
       3. avoid spamming the API with incomplete queries - eg user intends to search for apple, try to avoid spamming the api with requests for each combination -> ( a, ap, app, appl, apple)
    */
    this.keyUp.pipe(debounceTime(1000)).subscribe(() => {
      console.log(this.searchKey);
      this.http
        .get(`https://dummyjson.com/products/search?q=${this.searchKey}`)
        .subscribe((data: any) => {
          console.log('data');
          console.log(data);
          this.products = data.products;
        });
    });
  }
}
