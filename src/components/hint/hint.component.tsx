import React from 'react';
import './hint.styles.scss';

const Hint: React.FC = (): JSX.Element => (
  <div className='hint'>
    <pre className='hint-icon'>i</pre>
    <p className='hint-text'>Click an image to zoom, then Tap on it to close</p>
  </div>
);
export default Hint;
