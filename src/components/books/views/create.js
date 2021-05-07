import React, {useState, useEffect} from 'react'
import {useForm} from "react-hook-form";
import axios from "axios";

import AuthorsList from "../components/AuthorsList";

const Create = () =>{

    const {register, handleSubmit,  formState: { errors }} = useForm()
    const [getAuthors, setAuthors] = useState({ authors : []})
    const [showMessage, setMessage] = useState(false)
    const [getMsg, setMsg] = useState(["","",""])

    useEffect( async () => {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_API}/authors`)
            setAuthors(response.data)

    },[])

    const onSubmit = async (formData, event) =>{


        try{
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_API}/books`, formData)
            setMsg(["success", "Success!", "Books added Successfully."])


        }catch (e){
            setMsg(["danger", "Whoops!", "Something went wrong, please try again later."])
        }

        setMessage(true)
        event.target.reset()


    }

    const Message= () =>{

        if(showMessage == true){
            return(
                <div className={"alert alert-" + getMsg[0]}>
                    <strong>{getMsg[1]}</strong> {getMsg[2]}
                </div>
            )
        }
        return <></>

    }

    return (
        <div class="row text-left">

            <div class="col-12">
               <Message/>
            </div>

            <div class="col-6">
                <h1> Add a new book</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label >Title:</label>
                        <input type="text" className="form-control" placeholder="Enter title" name="title" {...register("title", { required:true})} />
                        {errors.title && <p> Please enter a valid title</p>}
                    </div>
                    <div className="form-group">
                        <label >Description:</label>
                        <input type="text" className="form-control" placeholder="Enter description" name="description" {...register("description", { required:true})} />
                        {errors.description && <p> Please enter a valid description</p>}

                    </div>
                    <div className="form-group">
                        <label >Category:</label>
                        <input type="text" className="form-control" placeholder="Enter category" name="category" {...register("category", { required:true})} />
                        {errors.category && <p> Please enter a valid category</p>}

                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Author:</label>

                        <select class="form-control" name="author_id" {...register("author_id")}>
                            <AuthorsList authors={getAuthors.authors}/>
                        </select>

                        {errors.author_id && <p> Please enter a valid category</p>}

                        {/*<input type="text" className="form-control" placeholder="Enter author" name="author_id" {...register("author_id", {required:true})} />*/}
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Create