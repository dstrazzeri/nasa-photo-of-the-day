import React from 'react'
import styled from 'styled-components'

const styledTitle=styled.div`
 color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
  font-size: 10rem;
`



const Title = props => {
    const {title} = props

    return (
        <styledTitle>
            {title}
        </styledTitle>
    )
}



export default Title