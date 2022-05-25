import React, { useState } from 'react'
import ChildState from './ChildState'

function LesStatesII() {


    const [count, setCount] = useState(0)


    const foo = () => {
        setCount(count + 2)
    }
    const func = () => {



    }
    return (
        <div>
            <h1> 04-Remonter les states </h1>
            <p> quand on retourne du jsx , il faut tout le temps ,
                retourner un bloc , et donc pas d'élément adjacent comme
                ce cas là :
                return (<br />
                {'<h1> props.name  </h1>'} <br />
                {'<h1> props.name  </h1>'}<br />
                {'<h1> props.name  </h1>'}<br />
                {'<h1> props.name  </h1>'}<br />
                {'<h1> props.name  </h1>'}<br />
                {'<h1> props.name  </h1>'})
            </p>
            {count}
            <br />
            <ChildState foo={foo} func={func} />
        </div >
    )
}

export default LesStatesII