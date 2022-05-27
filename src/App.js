import React from "react";
import FirstComponent from "./react--learning/01-Premier-Composant/FirstComponent";
import LesStates from "./react--learning/02-Use_States/LesStates";
import LesProps from "./react--learning/03-LesProps/LesProps";
import LesStatesII from "./react--learning/04-UseState_II/LesStatesII";
import UseCss from "./react--learning/05-UtiliserCss/UseCss";
import Image from "./react--learning/06-Utiliser-des-images/Image";
import UsingInput from "./react--learning/07-Utiliser-des-inputs/UsingInput";
import Condition from "./react--learning/08-Rendu-Conditionnel/Condition";
import Ternaire from "./react--learning/09-l'opérateur-ternaire/Ternaire";

function App() {

  //qu'est ce que c'est le jsx ? 

  return (
    <div className="App ">



      <h1> hello world app react</h1>
      {/* {
        le jsx , javascript XML  , c'est notation spéciale , cela va se faire 
        compiler en méthode de react js , cela permet d'écrire facilement du html 
        cela nous permet de créer du contenu hyper facilement
        
      } */}
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, quidem?</p>
      {1000}
      {/* {on peut mettre des expressions javascripte dans des accolades {}   
    
    } */}
      <br />
      <br />

      {5 + 5}
      <br />
      <br />

      <input type="text" />
      {/* ne pas oublier de fermer les balises inputs sur react js   */}
      <p className="color">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatem,
        veritatis quasi aut sapiente fugit odio natus sed sit sint iste, vel dolor? Nemo voluptates perspiciatis quia cupiditate! Aspernatur, nesciunt.</p>
      {/* les class sont remplacer par className en react js  */}





      {/* notre premier composant  */}
      <FirstComponent />
      <LesStates />
      <LesProps txt={<h1>'salutation depuis appjs'</h1>} />
      <LesStatesII />
      <UseCss />
      <Image />
      <UsingInput />
      <Condition />
      <Ternaire />

    </div>
  );
}

export default App;
