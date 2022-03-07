import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sum, subtract } from '../src/store/Calculator/Calculator.actions';

const Calculator = () => {
    const dispatch = useDispatch()
    const result = useSelector((state) => state.calculator )

    const [a, setA] = useState(0)
    const [b, setB] = useState(0)

    return (
        <div>
            <input type='text' placeholder='a' value={a} onChange={(e)=> (setA(Number(e.target.value)))}/>
            <input type='text' placeholder='b' value={b} onChange={(e)=> (setB(Number(e.target.value)))}/>
            <button
            onClick={()=> dispatch(sum(a,b))}
            >Adicionar</button>
            <button>Subtrair</button>
            <div>
                {result}
            </div>
        </div>
    )
}

export default Calculator;