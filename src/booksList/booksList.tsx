import React from "react";
import BookCard from "../book/bookCard";
import { Urls } from "../constants/urls";
import HttpHelper from "../helpers/httpHelper";

class BooksList extends React.Component{
    state={
        books: []
    }

    componentDidMount(){
        //в редьюсер
        HttpHelper.httpGet(Urls.booksList).then(books=>{
            this.setState({books: books});
        });        
    }

    render(){
        const bookCards = this.state.books.map(book=><BookCard book={book} key={book['id']}/>);

        return  <>
                    <h3>Все книги</h3>
                    <section>
                        {bookCards}
                    </section>
                </>
        }
}


export default  BooksList;