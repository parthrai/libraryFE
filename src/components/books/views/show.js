import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

import '../books.css'

const Show = () =>{

    const [getBook, setBook] = useState( { book :{}})

    const { book_id } = useParams();

    useEffect( async () =>{

        let response;
        try{
            response = await axios.get(`${process.env.REACT_APP_BACKEND_API}/books/${book_id}`)
        }catch (e){
            window.location = "/books"
        }



        setBook(response.data)
    }, [])

    const deleteBook= async ()=>{
        //1. make an API call to delete the book

        const response = await axios.delete(`${process.env.REACT_APP_BACKEND_API}/books/${book_id}`)

        alert("book deleted")

        window.location = "/books"

    }

    return (
        <div class="row">
            <div class="col-6">
                <img class="bookImg" src="https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-e1464023124869.jpeg"/>
            </div>

            <div class="col-6">
                <button className="btn btn-danger" onClick={deleteBook}> Delete</button>
                <br/><br/>
                <h1>{getBook.book.title}</h1>

                <h3> Written by - {getBook.book.author_id}</h3>

                <p> {getBook.book.description}</p>
            </div>


        </div>
    )
}

export default Show