import React, { useState } from 'react'
import devweb from './img/devweb.jpg'
import './styles.css'
import butter from './img/butterfly.svg'
// import { ReactComponent as Dragon } from './img/dragon.svg'
function Image() {


    const taille = { heigth: 300, width: 300 }


    const [next, setNext] = useState(0)
    const [transfom, setTransfom] = useState(' sayan de base ')
    const updateImg = () => {
        setNext(next + 1)

        if (next >= 5) {
            setNext(0)
            setTransfom('sayan de base ')
        }

        if (next === 0) {
            setTransfom('super sayan 2')
        }
        if (next === 1) {
            setTransfom('super sayan 3')
        }
        if (next === 2) {
            setTransfom('super sayan 4')
        }
        if (next === 3) {
            setTransfom('super saiyan god ')
        }
        if (next === 4) {
            setTransfom('super saiyan blue')
        }
    }

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
            <img style={taille} src="./img/reddit-pixel.jpg" alt="" /><br />

            exemple avec des images à chemin dynamique en utilisant les ` url + ${ }`<br />
            <img style={taille} src={process.env.PUBLIC_URL + `./img/image--${next}.jpg`} alt="" /><br />
            <button className='btn-img' onClick={updateImg}>
                suivant
            </button>
            <h1>{transfom}</h1>

            <h3> importation d'un svg sur react </h3>
            <img style={taille} src={butter} alt="" />

            <h3>importation d'un svg en tant que classe </h3>
            {/* <Dragon style={taille} /> */}
        </div>
    )
}

export default Image