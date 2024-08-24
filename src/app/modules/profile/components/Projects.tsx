
import React from 'react';
import FieldImage  from './../../../../../public/media/logos/lineup.png'
import { left, right } from '@popperjs/core';


const Player = ({  style , nameplayer }) => {
  return (
  <div className="player" style={style}>
   <div className='playerphoto'>
   photo
   </div>
    <div className="playername">
      {nameplayer}
    </div>
  </div>
  );
};


const Team = ({ side }) => {
  return (
    <div className={`team team-${side}`}>
      
      <Player  nameplayer={'erfan'} style={{ top: '12%', left: side === 'left' ? '35%' : 'unset', right: side === 'right' ? '35%' : 'unset', }} />
      <Player  nameplayer={'erfan'} style={{ top: '45%', left: side === 'left' ? '5%' : 'unset', right: side === 'right' ? '5%' : 'unset' }} />
      <Player  nameplayer={'erfan'} style={{ top: '35%', left: side === 'left' ? '30%' : 'unset', right: side === 'right' ? '30%' : 'unset' }} />
      <Player  nameplayer={'erfan'} style={{ top: '55%', left: side === 'left' ? '30%' : 'unset', right: side === 'right' ? '30%' : 'unset' }} />
      <Player  nameplayer={'erfan'} style={{ top: '77%', left: side === 'left' ? '35%' : 'unset', right: side === 'right' ? '35%' : 'unset' }} />
      
      <Player  nameplayer={'erfan'} style={{ top: '28%', left: side === 'left' ? '50%' : 'unset', right: side === 'right' ? '50%' : 'unset' }} />
      <Player  nameplayer={'erfan'} style={{ top: '45%', left: side === 'left' ? '50%' : 'unset', right: side === 'right' ? '50%' : 'unset' }} />
      <Player  nameplayer={'erfan'} style={{ top: '62%', left: side === 'left' ? '50%' : 'unset', right: side === 'right' ? '50%' : 'unset' }} />
      
      <Player  nameplayer={'erfan'} style={{ top: '18%', left: side === 'left' ? '70%' : 'unset', right: side === 'right' ? '70%' : 'unset' }} />
      <Player  nameplayer={'erfan'} style={{ top: '45%', left: side === 'left' ? '80%' : 'unset', right: side === 'right' ? '80%' : 'unset' }} />
      <Player  nameplayer={'erfan'} style={{ top: '72%', left: side === 'left' ? '70%' : 'unset', right: side === 'right' ? '70%' : 'unset' }} />


    </div>
  );
};

export function Projects() {
  return (
    <div>
    <div className=" football-container " style={{ }}>
    <img src={FieldImage} alt="Football Field" className="football-field " />
    <Team side="left" />
    <Team side="right" />
    
  </div>
  <div className='container w-full fs-md-6 '>
    <div className='row dir align-items-center gap-5 gap-md-0 '>
    <div className='col-md-6 col-12  text-center '> 
      <table>
        <thead>
          <tr><th>اسم تیم راست </th></tr>
        </thead>
      <tbody>
        <tr> 
          <td>1</td>
          <td>نلسون سمدو</td>
        </tr>
        <tr> 
          <td>10</td>
          <td>لیونل مسی  </td>
        </tr>
      </tbody>
      </table>  
        </div>
    <div className='col-md-6 col-12  text-center  ' >
      <table>
      <thead>
          <tr><th>اسم تیم چپ </th></tr>
        </thead>
      <tbody>
        <tr> 
          <td>1</td>
          <td>نلسون سمدو</td>
        </tr>
        <tr> 
          <td>10</td>
          <td>لیونل مسی  </td>
        </tr>
      </tbody>
      </table>  </div>
    </div>
  </div>

  </div>
  );
}

