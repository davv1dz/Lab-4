import React from "react";
import { Container } from "react-bootstrap";


export class Create extends React.Component {

    //Binding the Events
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
        this.onChangeBookCover = this.onChangeBookCover.bind(this);
        this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);

        this.state = {
            title: '',
            cover: '',
            author: ''
        }
    }

    //Display message to the console
    handleSubmit(e) {
        e.preventDefault();
        console.log(`Book Added!
       Title: ${this.state.title}
       Cover: ${this.state.cover}
       Author: ${this.state.author}`);
        this.setState({
          title: '',
          cover: '',
          author: ''
        })
    }

    //Envoke add book title event
    onChangeBookTitle(e) {
        this.setState({
            title: e.target.value
        })
    }
    //Envoke add  book cover event
    onChangeBookCover(e) {
      this.setState({
          cover: e.target.value
      })
  }
    //Envoke add book author event
    onChangeBookAuthor(e) {
      this.setState({
          author: e.target.value
    })
}

    render() {
        return (
            // Insert HTML form
            <div>
              <center>
                <h3>Hello from my Create component!</h3>
                <br></br>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Add Book Title: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeBookTitle}
                        />
                    </div>
                    <br></br>

                    <div className="form-group">
                        <label>Add Book Cover: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.cover}
                            onChange={this.onChangeBookCover}
                        />
                    </div>
                    <br></br>
                    
                    <div className="form-group">
                        <label>Add Book Author: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.author}
                            onChange={this.onChangeBookAuthor}
                        />
                    </div>
                    <br></br>
                    <input type="submit" value="Add Book" />
                </form>
              </center>
            </div>
            
        )
    }
}