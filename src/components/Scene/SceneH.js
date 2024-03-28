import React, { useState } from 'react';
import Toggler from './Toggler';
import Indicator from './Indicator';
import './style.css';

const SceneH = () => {
  const [isLight, setIsLight] = useState(true);

  const toggleScene = () => {
    setIsLight(!isLight);
  };

  return (
    <div className={isLight ? 'scene-on' : 'scene-off'}>
      <Toggler
        changeParentState={() => {
          toggleScene();
        }}
        buttonText={isLight ? 'Off' : 'On'}
      />
      <Indicator text={isLight ? 'Light is on' : 'Light is off'} />
    </div>
  );
};

export default SceneH;
