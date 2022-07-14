import React, { useEffect, useState } from "react";
import s from "./navigation.module.css";
const Navigation = ({season,serias,setSeason,setserias}) => {
    const seasonHandler = (e) => {
            setSeason(e.target.value)
            setserias(1)
            localStorage.setItem('season',e.target.value)
            localStorage.setItem('serias',1)

    }
    const seriashandler = (el) => {
        setserias(el)
        localStorage.setItem('serias',el)
        localStorage.setItem('season',season)
    }
  const data = [
    {
      season: 1,
      serias: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    },
    {
      season: 2,
      serias: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25,
      ],
    },
    {
      season: 3,
      serias: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22,
      ],
    },
    {
      season: 4,
      serias: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22,
      ],
    },
    {
      season: 5,
      serias: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24,
      ],
    },
    { season: 6, serias: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
  ];
 
  return (
    <nav className={s.container}>
      <div className={s.season}>
        <select value={season} onChange={e=>seasonHandler(e)} >
            {data.map(el=>{
                return <option value={el.season} key={el.season}>{el.season} сезон</option>
            })}
        </select>
      </div>
      <div>
        <ul>
            {data[season-1].serias.map(el=>{
                return <li onClick={()=>seriashandler(el)} className={el === serias ? s.active : ''} key={el}>{el} серия</li>
            })}
                
        
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
