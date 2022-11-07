import React from 'react'

export const TiempoDetencion = () => {
    return (
        <form
            className="form-control mt-3 p-3">
            <h2 className="text-center">Calcule el tiempo de detención</h2>
            <div className='container mx-2 row'>
                <div className='col-3'>
                    <label htmlFor="fechaDet" className="form-label">Fecha de detención:</label>
                    <input type="date" className="" id="fechaDet" />

                </div>
                <div className='col-3'>
                    <label htmlFor="fechaLib" className="form-label">Fecha de libertad o computo:</label>
                    <input type="date" className="" id="fechaLib" />
                </div>
                <div className='col-3'>
                <div className=""
                    id="resultadoDet">Tiempo de detención: </div>
                </div>
                <div className='col-2'>

                    <input type="button" id="agregar" value="Agregar periodo"
                        className="" />
                </div>

            </div>
          
         
          
      
            <div className=""
                id="periodosDet">
                <p>Periodos de detención:</p>
            </div>
            <input type="button" id="calcularDet" value="calcular total"
                className="" />
            <div className=""
                id="resultadoTotalDet">Tiempo Total de detención: </div>


        </form>
    )
}
