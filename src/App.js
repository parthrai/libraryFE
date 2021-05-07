import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/common/Header'
import Footer from './components/common/Footer'

import BooksList from './components/books/views/list'
import BooksCreate from './components/books/views/create'
import BooksShow from './components/books/views/show'
import BooksUpdate from './components/books/views/update'

import AuthorsList from './components/authors/views/list'
import AuthorsCreate from './components/authors/views/create'
import AuthorsShow from './components/authors/views/show'
import AuthorsUpdate from './components/authors/views/update'

const App =()=>{

  return(
     <div class="container text-center">
       <div class="row">
           <div class="col-12">
               <Header/>
           </div>

           <BrowserRouter>
               <Switch>

                   <Route path="/" exact>
                       <h1>This is home page</h1>
                   </Route>

                   <Route path="/books" exact>
                       <BooksList/>
                   </Route>

                   <Route path="/books/create" exact>
                       <BooksCreate/>
                   </Route>

                   <Route path="/books/:book_id/show" exact>
                       <BooksShow/>
                   </Route>

                   <Route path="/books/:id/update" exact>
                       <BooksUpdate/>
                   </Route>

                   <Route path="/authors" component={AuthorsList} exact/>
                   <Route path="/authors/create" component={AuthorsCreate} exact/>
                   <Route path="/authors/:id/show" component={AuthorsShow} exact/>
                   <Route path="/authors/:id/update" component={AuthorsUpdate} exact/>




               </Switch>




           </BrowserRouter>



           <div className="col-12">
               <Footer/>
           </div>
       </div>

     </div>
  )
}

export default App