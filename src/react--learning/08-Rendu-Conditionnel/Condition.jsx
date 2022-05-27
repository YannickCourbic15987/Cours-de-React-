import React, { useState } from 'react'
import './style.css'
function Condition() {

    const [toggle, setToggle] = useState(true)


    const onChangeState = () => {

        setToggle(!toggle)

    }

    if (toggle === true) {
        let toggleInput = <p> whouah ça change </p>
        return (
            <div>

                <h1>08-créer un rendu conditionnel avec if </h1>

                {toggleInput}
                <button
                    onClick={onChangeState}
                > modifier
                </button>
            </div>
        )
    }
    else {
        let toggleInput = <input type="text" />
        return (
            <div>

                <h1>08-créer un rendu conditionnel avec if </h1>

                {toggleInput}
                <button
                    onClick={
                        onChangeState
                    }
                > modifier
                </button>
            </div>
        )

    }










    // return (
    //     <div>

    //         <h1>08-créer un rendu conditionnel avec if </h1>

    //         {toggleInput}
    //         <button
    //             onClick={onChangeState}
    //         > modifier
    //         </button>
    //     </div>
    // )
}

export default Condition