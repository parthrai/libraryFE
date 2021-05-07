import React from 'react'

const AuthorsList = props =>{

    return (
        <>
        {
            props.authors.map(a => {
                return <option value={a._id}>{a.name}</option>
            })
        }
        </>
    )
}



export default AuthorsList