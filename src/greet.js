import React from 'react';
import './greet.css';

export default function Greet(props) {
  var flower;
  if (props.day=='Monday')
  {
    flower = '💐';
  }
  else if (props.day=='Tuesday')
  {
    flower = '🌷';
  }
  else if (props.day=='Wednesday')
  {
    flower = '🌸';
  }
  else if (props.day=='Thursday')
  {
    flower = '🌹';
  }
  else if (props.day=='Friday')
  {
    flower = '🌺';
  }
  else if (props.dayy=='Saturday')
  {
    flower = '🌻';
  }
  else
  {
    flower = '🌼';
  }
    return (
      <div className='container-ext'>
      <h1 className='inner-text'>Good Morning {props.name} {flower}, It's {props.day} today!</h1>
      </div>
    );
}

