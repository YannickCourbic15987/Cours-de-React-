import React, { useState } from 'react'

function Ternaire() {
    const [toggle, setToggle] = useState(false)
    const [text, setText] = useState('')
    const [newtext, setNewText] = useState('')

    const handleSubmit = (e) => {
        setToggle(true)
        e.preventDefault()

        if (toggle) {
            setToggle(false)
        }

    }


    const handleChange = (e) => {
        setText(e.target.value)
    }

    console.log(newtext);



    console.log(toggle);


    const handleInput = (e) => {
        e.preventDefault()
        setNewText(text)
        setText('')
    }



    return (



        <div>
            <h1>09- les opérateurs ternaires </h1>



            <form onSubmit={handleInput}>
                <input
                    type="text"
                    onChange={handleChange}
                    value={text}
                />
            </form>


            <br />



            <form
                onSubmit={handleSubmit
                }
            >
                {!toggle ? <p >{newtext}</p> : <form> <input type="text" /> </form>}


                <button type="submit"> modifier</button>
            </form>
        </div>
    )
}

export default Ternaire