import React, { useState } from 'react'
import Error from './Error'

const DefinirPresupesto = ({ setPresupuesto, setRestante, setMostrarpregunta }) => {
    const [formvalue, setFormvalue] = useState(0)
    const [error, setError] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formvalue < 1 || isNaN(formvalue)) {
            setError('El presupuesto es incorrecto')
            return false
        }
        setPresupuesto(formvalue)
        setRestante(formvalue)
        setMostrarpregunta(false)
        setError(null)
    }

    return (
        <div>
            <h2>Colocar tu presupuesto</h2>
            <form onSubmit={handleSubmit}>
                <input type="number" name="" id=""
                    className='input'
                    onChange={(e) => setFormvalue(parseInt(e.target.value))}

                />
                <input type="submit" value="Definir presupuesto"
                    className='button-primary u-full-width'
                />
                {error && <Error error={error} />}

            </form>

        </div>
    )
}

export default DefinirPresupesto

