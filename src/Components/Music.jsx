import React from 'react'
import {MusicData} from './MusicData';

function card(p){
  return(
    <div className="content">
    <ul>
      <li><a href="" className="heading">{p.heading}</a></li>
      <li><a href="">Show all</a></li>
    </ul>
    <div className="all">
      <div className="first">
        <img src={p.img1} alt="" />
        <h1>{p.title1}</h1>
        <p>{p.subtitle1}</p>
        <div className="play">
          <span className="fa fa-play"></span>
        </div>
      </div>
      <div className="first">
        <img src={p.img2} alt="" />
        <h1>{p.title2}</h1>
        <p>{p.subtitle2}</p>
        <div className="play">
          <span className="fa fa-play"></span>
        </div>
      </div>
      <div className="first">
        <img src={p.img3} alt="" />
        <h1>{p.title3}</h1>
        <p>{p.subtitle3}</p>
        <div className="play">
          <span className="fa fa-play"></span>
        </div>
      </div>
      <div className="first">
        <img src={p.img4} alt="" />
        <h1>{p.title4}</h1>
        <p>{p.subtitle4}</p>
        <div className="play">
          <span className="fa fa-play"></span>
        </div>
      </div>
      <div className="first">
        <img src={p.img5} alt="" />
        <h1>{p.title5}</h1>
        <p>{p.subtitle5}</p>
        <div className="play">
          <span className="fa fa-play"></span>
        </div>
      </div>
      <div className="first">
        <img src={p.img6} alt="" />
        <h1>{p.title6}</h1>
        <p>{p.subtitle6}</p>
        <div className="play">
          <span className="fa fa-play"></span>
        </div>
      </div>
    </div>
  </div>
  )

}

const Music = () => {
  return (
    <div>
      {MusicData.map(card)}
    </div>
  )
}

export default Music

