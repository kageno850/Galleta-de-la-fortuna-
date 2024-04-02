import React from 'react'
import arryPhrases from '../utils/phrases.json'
import getRandom from '../services/getRandom'
import arryImagenes from '../utils/images.json' 

const ButtomPhrase = ({setPhrase, setImage}) => {

    const handlePhrase = () => {
        setPhrase(getRandom(arryPhrases))
        setImage(getRandom(arryImagenes))
    }
  return (
    <button onClick={handlePhrase}className='btn'>Probar mi suerte</button>
  )
}

export default ButtomPhrase
