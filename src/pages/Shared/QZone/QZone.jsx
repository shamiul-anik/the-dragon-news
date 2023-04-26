import React from 'react';
import QZone1 from '../../../assets/qZone1.png';
import QZone2 from '../../../assets/qZone2.png';
import QZone3 from '../../../assets/qZone3.png';

const QZone = () => {
  return (
    <div className='bg-secondary bg-opacity-10 mt-4 text-center p-4'>
      <h3 className='fw-bold fs-5'>Q-Zone</h3>
      <img className='mt-2' src={QZone1} alt="QZone-1" />
      <img className='mt-2' src={QZone2} alt="QZone-2" />
      <img className='mt-2' src={QZone3} alt="QZone-3" />
    </div>
  );
};

export default QZone;