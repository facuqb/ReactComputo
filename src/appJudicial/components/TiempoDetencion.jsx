import React, { useEffect} from 'react'
import { calculoDet, totalDet } from '../helpers'
import { useForm } from '../hooks/useForm'



export const TiempoDetencion = () => {
    const {onInputChange,onResetForm,fechaDet,fechaLibertad, tiempoDet, setFormState,formState,periodosDetencion,totalDetencion} = useForm({fechaDet: "", fechaLibertad: "", tiempoDet: 0, totalDetencion: 0, periodosDetencion: []})
    
    
    
    const cambioDet = () =>{
        if(fechaDet === "" || fechaLibertad === "") return
        const {detencion} = calculoDet(fechaDet,fechaLibertad);
        setFormState({
            ...formState,
            tiempoDet: detencion,
        })

    }

    const onDetPeriodo = (e) =>{
        e.preventDefault()
        if(fechaDet === "" || fechaLibertad === "") return
        const {dias} = calculoDet(fechaDet,fechaLibertad);
        setFormState({
            ...formState,
            periodosDetencion:[...periodosDetencion,{
                fechaDetPer: fechaDet,
                fechaLibPer: fechaLibertad,
                detencion: tiempoDet,
                dias: dias
            }],
        })
    }

    const onCalcularTotal = (e) =>{
        e.preventDefault()
        if(periodosDetencion === []) return
        const {detencion} = totalDet(periodosDetencion)
        setFormState({
            ...formState,
            totalDetencion: detencion
        })

    }
    

    useEffect(() => {
      cambioDet()
    }, [fechaDet,fechaLibertad])
  
 



    return (
        <div
            className="form-control mt-3 p-3">
            <h2 className="text-center">Calcule el tiempo de detención</h2>
            <form 
                className='container mx-2 row'
                >
                <div className='col-3'>
                    <label 
                        htmlFor="fechaDet" 
                        className="form-label"
                        >Fecha de detención:
                    </label>
                    <input
                        type="date" 
                        className="form-control" id="fechaDet" 
                        name="fechaDet"
                        value={fechaDet}
                        onChange={onInputChange}/>

                </div>
                <div className='col-3'>
                    <label 
                        htmlFor="fechaLib"
                        className="form-label">
                        Fecha de libertad o computo:
                    </label>
                    <input 
                        type="date" 
                        className="form-control" 
                        id="fechaLib"
                        name="fechaLibertad"
                        value={fechaLibertad}
                        onChange={onInputChange}/>
                        
                </div>
                <div className='col-3'>
                    <label className="form-label"
                    id="resultadoDet">Tiempo de detención: </label>
                    <input type="text" 
                    className='form-control'
                    name='tiempoDet'
                    value={tiempoDet} 
                    
                    readOnly/>
                    
                </div>
                <div className='col-3 align-self-end'>
                    <button
                        className='btn btn-outline-primary w-100'
                        onClick={onDetPeriodo}>
                        Agregar periodo
                    </button>
                </div>

            </form>
            <div className="container mt-3 d-flex align-items-center flex-column "
                id="periodosDet">
                <p className='text-center'>Periodos de detención:</p>
                {
                    periodosDetencion.map(periodo => (
                        <p className='mb-4 rounded form-control' key={parseInt(Math.random()*5000)}>
                            {periodo.fechaDetPer} a {periodo.fechaLibPer} = {periodo.detencion}
                        </p>
                    ))
                }
            <button
                className='btn btn-outline-primary'
                onClick={onCalcularTotal}>
                    Calcular Total
            </button>
            </div>
            
            <label className="form-label"
                id="resultadoTotalDet">Tiempo Total de detención: </label>
            <input type="text" 
                   className='form-control'
                    name='totalDetencion'
                    value={totalDetencion} 
                    
                    readOnly/>


        </div>
    )
}
