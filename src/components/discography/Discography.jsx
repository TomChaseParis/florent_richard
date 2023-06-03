import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import Disco2 from '../../assets/artetmaniere.jpg';
import Disco3 from '../../assets/ff.jpeg';
import Disco5 from '../../assets/jour.webp';
import Disco6 from '../../assets/Initials-SG.jpg';
import Disco7 from '../../assets/gb.jpeg';

const Discography = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const albums = [
    { image: Disco2, title: 'L ART ET LA MANIERE', link: 'https://www.deezer.com/fr/album/43023' },
    { image: Disco5, title: 'UN JOUR COMME CA', link: 'https://open.spotify.com/track/2YCEYChjVmYQK003vLbJn8' },
    { image: Disco3, title: 'FALLING FOR', link: 'https://open.spotify.com/album/3fBwPHwh3NF6g3MQQWeiOC' },
    { image: Disco6, title: 'INITIALS SG', link: 'https://music.apple.com/fr/album/initials-sg/1565843282' },
    { image: Disco7, title: 'LE GRAND BLOND ET L ACCORDEONISTE', link: 'https://music.apple.com/fr/album/le-grand-blond-et-laccord%C3%A9oniste/1463623561' },
  ];

  useEffect(() => {
    const checkWindowWidth = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkWindowWidth();
    window.addEventListener('resize', checkWindowWidth);

    return () => {
      window.removeEventListener('resize', checkWindowWidth);
    };
  }, []);

  const prevAlbum = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? albums.length - 1 : prevIndex - 1));
  };

  const nextAlbum = () => {
    setCurrentIndex((prevIndex) => (prevIndex === albums.length - 1 ? 0 : prevIndex + 1));
  };

  const displayedAlbums = isMobile ? albums : albums.slice(currentIndex, currentIndex + 3);

  return (
    <div className="mt-10" id="discography">
      <div>
        <h1 className="text-center py-12">DISCOGRAPHIE</h1>
        <div className="flex justify-center">
          <div className={`flex gap-12 ${isMobile ? 'flex-col' : ''}`}>
            {displayedAlbums.map((album, index) => (
              <div key={index}>
                <img className="w-[300px]" src={album.image} alt="" />
                <p className='text-base italic album-title'>{album.title}</p>
                <a
                  href={album.link}
                  className="inline-block bg-blue-800	 hover:bg-blue-600 text-white py-2 px-4 border border-blue-500 rounded"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ECOUTER
                </a>
              </div>
            ))}
          </div>
        </div>
        {!isMobile && (
          <div className="flex justify-center mt-4">
            <button className="text-2xl text-gray-500 mr-4" onClick={prevAlbum}>
              &lt;
            </button>
            <button className="text-2xl text-gray-500" onClick={nextAlbum}>
              &gt;
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Discography;
