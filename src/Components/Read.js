import React from "react";
import { Books } from './Books';
import axios from "axios";

export class Read extends React.Component{


    componentDidMount(){
        axios.get('https://jsonblob.com/api/jsonblob/1027219693823606784')
        .then((response)=>{
            //Importing http request using axios
            this.setState({books:response.data})
        })
        //Catch error
        .catch((error)=>{
            console.log(error);
        })
    }

    //Store book variables in array
    state = {
        books:
       [


       ]
                    
    }
    render(){
        return (
    <div>
        <h2><center>Hello from my read component</center></h2>
        <br></br>
        <Books books={this.state.books}></Books>
    </div>
    );
  }
}
    