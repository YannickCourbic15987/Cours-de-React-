import React, { useState } from 'react'

function ChildState(props) {

    const [count2, setCount2] = useState(10)




    return (

        <div>

            <button
                onClick={
                    props.foo
                }
            > Modifier depuis un enfant
            </button> <br />

            {count2}
            <button
                onClick={() => props.func(setCount2(count2 + 1))
                }
            >
                Ajouter
            </button>


        </div>
    )
}

export default ChildState