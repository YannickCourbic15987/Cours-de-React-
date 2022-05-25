import React, { useState } from 'react'
import './style.css'
function UseCss() {


    const [toggle, setToggle] = useState(true)
    const [item, setItem] = useState(1)
    const changeColor = () => {
        setItem(item + 1)

        if (item % 2 === 1) {
            setToggle(false)
        }
        else {
            setToggle(true)
        }
    }
    const StyleCss = { color: 'blue', fontSize: '2rem' }
    return (




        <div>
            <h1 style={{
                color: toggle ? 'crimson' : 'green',
                textDecoration: 'underline',
                backgroundColor: 'whitesmoke'
            }}>05- Utiliser le css sur react </h1>

            <button
                className='btn'
                onClick={

                    changeColor
                }
            >
                changement de couleur
            </button>

            <p style={StyleCss}> Hello depuis mon fichier jsx </p>

        </div >
    )
}

export default UseCss