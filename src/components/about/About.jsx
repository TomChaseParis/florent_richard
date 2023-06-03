import React from 'react'
import ImgAbout from '../../assets/about.jpeg'

import './About.css'

const About = () => {
  return (
    <div className='mt-[150px] h-[100vh] bg-gray-100 text-brown-800 max-sm:h-full about' id='about'>
        <div className='flex flex-col items-center'>
          <h1 className='text-center py-12'>BIOGRAPHIE</h1>
          <div className='flex gap-5 max-sm:flex-col max-sm:gap-7 about-list'>
            <img className='w-[500px] object-cover' src={ImgAbout} alt="about image" />
            <p className='w-[700px] text-base text-justify leading-9 max-sm:w-[90%] max-sm:text-justify max-sm:mx-auto about-text'>Fin technicien de la musique et subtil défenseur du décalage, Florent Richard se forge une carrière où rigueur et fantaisie font bon ménage. Violoncelliste et bassiste de formation, également pianiste, il se perfectionne en matière d’arrangement à l’American School of Modern Music. Son premier album L’art et la manière (Warner), paru en 2006, reçoit l’accueil unanime de la presse spécialisée et du grand public. Un succès entériné par Un jour comme ça, sorti l’année suivante. Les ballades mélancoliques de Florent deviennent sa signature : l’allégresse bastringue s’entrechoque à la nervosité du jazz, son interprétation rocailleuse frôle l’ironie mais flirte volontiers avec la poésie. Il explore les multiples facettes de sa stylistique, de 3ème album (2013), en passant par Le grand blond et l’accordéoniste (2019), jusqu’à Initials SG (2021), album tout en flamboyance consacré à la revisitation de Gainsbourg, réalisé avec Yannick Soccal, saxophoniste de Véronique Sanson. En 2021, Vincent Fernandel devient le producteur de Florent et l’incite à prendre un virage dans sa carrière. Après Falling For, opus acoustique où l’artiste renoue avec la douceur éthérée de ses premières amours musicales, Florent Richard et Vincent Fernandel co-écrivent Ecpyrose, un album résolument abyssal dans lequel Florent révèle sa pleine maturité de musicien et d’interprète. Ecpyrose sortira courant 2023.</p>
          </div>
        </div>
    </div>
  )
}

export default About