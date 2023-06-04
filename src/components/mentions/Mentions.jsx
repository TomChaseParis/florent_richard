import React from 'react'
import Navbar from '../../components/navbar/Navbar'

const Mentions = () => {
  return (
    <>
      <Navbar />
      <div className='flex items-center flex-col' id='mentions'>
        <h1 className='pt-[150px] text-center'>Mentions légales</h1>
        <p className='max-w-[900px] leading-9 mt-9 max-sm:p-3 text-justify'>Le présent site est édité par Vincent Fernandel  Production, représentant l &apos;artiste Florent Richard.</p>

        <ul className='flex flex-col py-4 leading-7 max-sm:p-3'>
          <li>Siège social : 115 RUE DE L ABBE GROULT 75015 PARIS</li>
          <li>Contact : vincentfernandelproduction@gmail.com</li>
          <li>Directeur de publication : Vincent Fernandel</li>
        </ul>
        <p className='max-w-[900px] leading-9 mt-9 max-sm:p-3 text-justify'>
          Propriété intellectuelle :

          Tous les contenus présents sur le site, tels que les textes, les images, les vidéos, les logos, les marques, les sons, ainsi que la structure générale du site, sont la propriété exclusive de Vincent Fernandel Production ou de ses partenaires. Ils sont protégés par les lois relatives à la propriété intellectuelle et ne peuvent être utilisés sans autorisation préalable.
        </p>

        <p className='max-w-[900px] leading-9 mt-9 max-sm:p-3 text-justify'>
          Données personnelles :

          Vincent Fernandel Production s &apos;engage à respecter la vie privée des utilisateurs du site. Les données personnelles collectées, telles que les noms, les adresses e-mail ou autres informations, ne seront utilisées que dans le cadre de la relation commerciale avec l &apos;utilisateur et ne seront en aucun cas divulguées à des tiers.
        </p>

        <p className='max-w-[900px] leading-9 mt-9 max-sm:p-3 text-justify'>
          Cookies :

          Le site utilise des cookies pour améliorer l &apos;expérience de navigation des utilisateurs. Un cookie est un fichier stocké sur l &apos;ordinateur de l &apos;utilisateur, permettant de le reconnaître lors de sa prochaine visite sur le site. Les cookies utilisés sur le site ne collectent pas de données personnelles.
        </p>

        <p className='max-w-[900px] leading-9 mt-9 max-sm:p-3 text-justify'>
        Responsabilité :

        Vincent Fernandel Production met tout en œuvre pour assurer l &apos;exactitude des informations présentes sur le site. Cependant, il ne peut être tenu responsable des erreurs, des omissions ou des éventuelles indisponibilités du site.  
        </p>

        <p className='max-w-[900px] leading-9 mt-9 max-sm:p-3 text-justify'>
        Liens vers des sites tiers :

        Le site peut contenir des liens vers des sites tiers. Vincent Fernandel Production ne peut être tenu responsable du contenu de ces sites et de leur conformité aux lois en vigueur. La présence de ces liens n &apos;implique en aucun cas une approbation ou une garantie de la part de Vincent Fernandel Production. 
        </p>

        <p className='max-w-[900px] leading-9 mt-9 max-sm:p-3 text-justify'>
       
        Droit applicable et juridiction compétente :

        Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux compétents seront ceux du ressort du siège social de Vincent Fernandel Production.</p>
    </div >
    </>
  )
}

export default Mentions