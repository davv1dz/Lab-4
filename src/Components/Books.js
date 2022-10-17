import React from "react";
import {Book_Item} from "./Book_Item";

export class Books extends React.Component{
    render(){
        //Acquire data from parent
        return this.props.books.map((book)=>{
            return<Book_Item book={book}></Book_Item>
        }





        );
    
  }
}