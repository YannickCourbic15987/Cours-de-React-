import React, { useState } from 'react'

function UsingInput() {



    const [input, setInput] = useState('')
    // const handleChange = (e) => {
    //     setInput(e)
    // }
    const handleInput = (e) => {
        setInput(e)
        console.log(e);
    }

    console.log(input);

    return (


        <div>
            <h1> 07-Utilisation des inputs </h1>
            <input

                type="text"
                // onInput={(e) => handleChange(e.target.value)}
                value={input}

                onChange={(e) => handleInput(e.target.value)}
            />


        </div>
    )
}

export default UsingInput