import React, { useState } from "react"

const Vanya = (props) => {
    const questions = props.questions
    const [state, setState] = useState([])
    const [counter, setCounter] = useState(0)

    const addNextQuestion = () => {

        setCounter(counter + 1)
    }

    return(
        <div className="Vanya">
            Рахунок - {counter}
            <button onClick={addNextQuestion}>Add counter</button>
        </div>
    )
}

export default Vanya;