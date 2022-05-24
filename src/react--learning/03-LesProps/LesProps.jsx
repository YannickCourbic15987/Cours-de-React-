import React from 'react'
function LesProps(props) {









    return (
        <div>
            <h1>03 - LesProps</h1>

            <p>
                si on console.log(props), cela va nous retourner un petit
                objet et cet objet va contenir ce qu'un parent lui donne

                voici ma props qui est récup depuis le composant
                FirstComponent : {props.txt}

                importer des states depuis un composant parent avec les props - {props.count}

                Du coup cela va nous permettre de garder les composants qui vont utiliser
                le state et la logique  et ensuite on va avoir des composants d'affichages
                et on appelle cela separation of concern

                puisque props ,c'est un objet du coup on directement mettre
                à la place du props -- "{"txt"}" ,on crée une variable à partir d'une
                propriété
            </p>

        </div>
    )
}

export default LesProps