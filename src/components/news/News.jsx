import React, {useState, useEffect} from 'react'
import Disco1 from '../../assets/controle.jpg';
import { motion } from 'framer-motion'

import './News.css'

const News = () => {

    const [isVisible, setIsVisible] = useState(true)
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIsVisible((prevVisible) => !prevVisible)
      }, 500) // Réglez la durée du clignotement en millisecondes
  
      return () => {
        clearInterval(interval)
      }
    }, [])

  return (
    <div className='max-sm:pt-[100px] max-sm:h-[100%] lg:h-screen flex items-center justify-center h-[80vh] bg-black text-white max-sm:flex-col ' id='news'>
      <div>
        <div className='flex justify-center'>
          <div className=' w-full'>
            <h1 className='text-center py-12'>ACTUALITES</h1>
            <div className='flex max-sm:pt-5 gap-9 justify-center max-sm:flex-col'>
              <img className='w-[400px] max-sm:mx-auto' src={Disco1} alt='' />
              <div className='flex flex-col max-sm:items-center'>
              <motion.h1
                  variants={{
                    hidden: { opacity: 0 },
                    show: {
                      opacity: 1,
                      transition: { duration: 0.5, yoyo: Infinity },
                    },
                  }}
                  initial="hidden"
                  animate={isVisible ? 'show' : 'hidden'}
                  viewport={{ once: false, amount: 0.3 }}>A LA UNE</motion.h1>
                  <h2 className="text-[30px] text-blue-800">SORTIE LE 5 JUIN</h2>
                <h2 className='text-[20px]'>A TOUR DE CONTRÔLE</h2>
                <p className='w-[500px] mt-5 text-base	 leading-9 max-sm:w-[90%] max-sm:text-justify max-sm:mx-auto text-news'>Titre-phare aux allures de révolte, musicalement incandescent, À tour de contrôle est une incursion en zone dangereuse, dont on sortira vivant ou non. D’un texte puissant, façon Gainsbourg avec des airs de Feu ! Chatterton, Florent Richard tranche dans le vif les tourments de notre époque. </p>
                <div className='mt-2 text-base'>
                  <a href="https://wiseband.lnk.to/florent-richard-a-tour-de-controle" className="inline-block bg-blue-800	hover:bg-blue-600 text-white py-2 px-4 border border-blue-500 rounded max-sm:mb-5"
                   target="_blank"
                   rel="noopener noreferrer">
                    ECOUTER
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News