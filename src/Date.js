import React from 'react'


const Date = props => {
const {submit, change} = props
    return(
        <form onSubmit={submit} >            
            <input type='date'  onChange={change}/>
            <input type='submit'/>
        </form>
    )
}

export default Date;