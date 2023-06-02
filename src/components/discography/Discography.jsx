import React from 'react';
import Disco1 from '../../assets/controle.jpg';
import Disco2 from '../../assets/artetmaniere.jpg';
import Disco3 from '../../assets/ff.jpeg';
import Disco4 from '../../assets/3ab.jpeg';
import Disco5 from '../../assets/jour.webp';

const Discography = () => {
  return (
    <div className='mt-10' id='discography'>
      <div>
        <h1 className='text-center py-12'>DISCOGRAPHIE</h1>
        <div className='flex justify-center '>
          <ul className='flex gap-10 max-sm:flex-col  '>
            <li>
              <img className='w-[300px]' src={Disco5} alt='' />
              <p>
                UN JOUR COMME CA
              </p>
              <a href="https://open.spotify.com/track/2YCEYChjVmYQK003vLbJn8" className="inline-block bg-blue-500 hover:bg-blue-600 text-white  py-2 px-4 border border-blue-500 rounded"
               target="_blank"
               rel="noopener noreferrer">
                ECOUTER
              </a>
            </li>
            <li>
              <img className='w-[300px]' src={Disco2} alt='' />
              <p>
                L ART ET LA MANIERE
              </p>
              <a href="https://www.deezer.com/fr/album/43023" className="inline-block bg-blue-500 hover:bg-blue-600 text-white  py-2 px-4 border border-blue-500 rounded"
               target="_blank"
               rel="noopener noreferrer">
                ECOUTER
              </a>
            </li>
            <li>
              <img className='w-[300px]' src={Disco3} alt='' />
              <p>
                FALLING FOR
              </p>
              <a href="https://open.spotify.com/album/3fBwPHwh3NF6g3MQQWeiOC" className="inline-block bg-blue-500 hover:bg-blue-600 text-white  py-2 px-4 border border-blue-500 rounded"
               target="_blank"
               rel="noopener noreferrer">
                ECOUTER
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Discography;
