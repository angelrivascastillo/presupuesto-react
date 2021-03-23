import React, { useState } from 'react'
import Error from './Error'

const initialFormValues = {
    name: '',
    cantidad: ''
}
const AgregarGastos = ({ restante, setRestante, addGastos }) => {
    const [formvalues, setFormvalues] = useState(initialFormValues)
    const { name, cantidad } = formvalues
    const [error, setError] = useState(null)

    const handleChange = e => {
        setFormvalues({ ...formvalues, [e.target.name]: e.target.value })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (cantidad < 1 || isNaN(cantidad)) {
            setError('El gasto es incorrecto')
            return false
        }
        if (name.trim() === '') {
            setError('El nombre del gasto es obligatorio')
            return false
        }
        setRestante(restante - parseInt(cantidad))
        addGastos(formvalues)
        setFormvalues(initialFormValues)
        setError(null)
    }
    return (
        <div>
            <h2>Agrega tus gastos aqui</h2>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    className='input'
                    name='name'
                    value={name}
                    onChange={handleChange}
                    placeholder='Nombre de gasto'

                />
                <input type="number" id=""
                    className='input'
                    name='cantidad'
                    value={cantidad}
                    onChange={handleChange}
                    placeholder='Cantidad'

                />
                <input type="submit" value="Agregar gasto"
                    className='button-primary u-full-width'
                />
                {error && <Error error={error} />}

            </form>

        </div>
    )
}

export default AgregarGastos
