import React from 'react'

const Helmet = (props) => {

    document.title = 'EvMart -' + props.title
  return (
    <div className='W-100'>{props.children}</div>
  )
}

export default Helmet