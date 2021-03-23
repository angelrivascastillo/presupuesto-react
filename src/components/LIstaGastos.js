import React, { useEffect, useState } from 'react'

const LIstaGastos = ({ restante, presupuesto, gastos }) => {
    // let color = 'success'
    const [color, setColor] = useState('success')

    useEffect(() => {
        if (restante <= presupuesto * 0.5 && restante > presupuesto * 0.25) setColor('warning')
        // if (restante > .25 * presupuesto) setColor('warning')
        else if (restante <= presupuesto * 0.25) setColor('danger')

    }, [restante, presupuesto])
    return (
        <div>
            <h2>Listado de gastos</h2>
            <ul>
                {gastos.map(gasto => (
                    <li key={gasto.id} className='list-group-item'>
                        <p>{gasto.name}</p> <span>$ {gasto.cantidad}</span>
                    </li>
                ))}
            </ul>

            <div className="alert alert-primary ">{presupuesto}</div>
            <div className={"alert alert-" + color}>{restante}</div>




        </div>
    )
}

export default LIstaGastos

