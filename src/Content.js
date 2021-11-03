import React from 'react'
import styled from 'styled-components'

const textStyle = styled.div`

`

const Content = props => {
    const {text} =props

    return(
        <textStyle>
            <p>{text}</p>
        </textStyle>
    )
}


export default Content