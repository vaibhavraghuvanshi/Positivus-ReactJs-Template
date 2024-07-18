import React from 'react'
import amazon from "../assets/amazon.png"
import dribble from "../assets/dribble.png"
import notion from "../assets/notion.png"
import netflix from "../assets/netflix.png"
import hubspot from "../assets/hubspot.png"
import zoom from "../assets/zoom.png"

const Client = () => {
  return (
    <div className='client'>
      <div className="client_logo">
        <img src={amazon} alt="Amazon" />
        <img src={dribble} alt="Dribble" />
        <img src={hubspot} alt="Hubspot" />
        <img src={notion} alt="Notion" />
        <img src={netflix} alt="Netflix" />
        <img src={zoom} alt="Zoom" />
      </div>
    </div>
  )
}

export default Client
