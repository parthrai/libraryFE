import React from 'react'

const BookCard = (props) =>{

    if(props.books.length > 0){
        return (
            <div class="row">
                {props.books.map ( book => {

                    return(
                        <div className="col-3">
                            <div className="card">
                                <img className="card-img-top" src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
                                     alt="Card image"/>
                                <div className="card-body">
                                    <h4 className="card-title">{book.title}</h4>
                                    <p className="card-text">{book.description}</p>
                                    <a href={'/books/'+book._id+'/show'} className="btn btn-primary">Read book</a>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        )
    }else{
        return(
            <h1> No books found</h1>

        )
    }

}

export default BookCard