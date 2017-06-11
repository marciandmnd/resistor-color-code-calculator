import React from 'react';
import Band from './Band';

export default function restest(props) {

  return (
    <div>
      <svg width="400" height="300">
        <rect width="300" height="100" 
              style={{fill:'rgb(0,0,255)', 
              strokeWidth: '3',
              stroke:'rgb(0,0,0)'}} />
        <Band />
      </svg>
    </div>
  );
}
