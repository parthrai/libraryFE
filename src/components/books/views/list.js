import React, {useState, useEffect} from 'react'
import axios from 'axios'

import BookCard from '../components/BookCard'
const List = () =>{

    // Create a state and store all the books in the state
    const [getBooks, setBooks] = useState({ books :[]})

    useEffect( async () => {

        const response = await axios.get(`${process.env.REACT_APP_BACKEND_API}/books/`)
        setBooks(response.data)


    }, [])

    return (
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2>Total number of books {getBooks.books.length}</h2>
                </div>

                <BookCard books={getBooks.books}/>

            </div>
        </div>
    )
}

export default List