import React from 'react'
import devweb from './img/devweb.jpg'
function Image() {


    const taille = { heigth: 500, width: 500 }


    return (
        <div>


            <h1> 06 - Utilisation des images </h1>
            <p>Les images sur react js , le plus simple c'est d'utiliser
                le tag image qui fait référence à une source ,comme en html de base
                mais ily a d'autre façon
            </p>
            <img style={taille} src={"https://images.unsplash.com/photo-1638913970895-d3df59be1466?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8&auto=format&fit=crop&w=800"} alt="" />
            <p>Une image importé depuis un fichier en local </p>
            <img src={devweb} alt="" />
            <p> image importer depuis public </p>
            <img style={taille} src="./img/reddit-pixel.jpg" alt="" />
        </div>
    )
}

export default Image