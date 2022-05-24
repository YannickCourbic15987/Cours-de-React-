import React, { useState } from 'react'
import LesProps from '../03-LesProps/LesProps'


function LesStates() {


  // console.log(useState(10))

  const [monState, setMonState] = useState(1)
  const [paire, setPaire] = useState('')
  const [count, setCount] = useState(0)
  //! ici on fait du destructuring , c'est à dire que si on log monstate
  //  on va avoir 10 d'afficher


  let modState = () => {
    setMonState(monState + 1)
    setCount(count + 1)
    if (monState % 2 === 0) {
      console.log('paire');
      setPaire('paire')
    }
    else {
      console.log('impaire');
      setPaire('impaire')
    }

  }
  console.log("Mise à jour ")






  return (


    <div>

      <h1> 02 - Les UseStates </h1>
      <p>
        le states , c'est les données d'un composant ,
        avec tout les composants
        si on console.log usestate , cela va nous retourner une fonction
        cela me retoune un objet ,
        0: (le state de départ peut être une chaine ,nombre ,function ect ),
        1: function ()
        <br />
        <br />
        {/* {"state de départ : " + monState} */}
        <br />
        pour pouvoir modifier un state , on va avoir besoin d'un button ,
        mais plus généralement un event qui va permettre de changer
        l'état du state
        les event sur react js s'écrivent directement sur la baslise
        et écrit le mot clé "on" et propose les autres event comme
        onSubmit , onClick et il attend une fonction

        Il faut crée une fonction pour pouvoir englober le setState en
        et pouvoir l'utiliser dans un event
        quand je change mon state , la page va se re - render et va se
        mettre à jour et se recrée
        et cela est considérer come un effet secondaire du state

      </p>

      <p>hello state - {paire + " : " + count}</p>
      <button
        onClick={
          modState
        }


      > Changer le State
      </button>
      <LesProps count={paire + " : " + count} />
    </div>
  )
}
export default LesStates