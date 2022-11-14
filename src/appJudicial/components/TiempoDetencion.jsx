import React, { useEffect} from 'react'
import { calculoDet, totalDet } from '../helpers'
import { useForm } from '../hooks/useForm'
import Button from '@mui/material/Button';
import AddTaskIcon from '@mui/icons-material/AddTask';
import CleaningServicesOutlinedIcon from '@mui/icons-material/CleaningServicesOutlined';
import FunctionsOutlinedIcon from '@mui/icons-material/FunctionsOutlined';



export const TiempoDetencion = ({onDiasAcumulados}) => {
    const {onInputChange,onResetForm,fechaDet,fechaLibertad, tiempoDet, setFormState,formState,periodosDetencion,totalDetencion,diasTotales} = useForm({fechaDet: "", diasTotales : 0, fechaLibertad: "", tiempoDet: 0, totalDetencion: 0, periodosDetencion: []})
    
    
    
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
        if(fechaDet === "" || fechaLibertad === "" || tiempoDet === "Periodo Invalido") return
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
        if(periodosDetencion.length === 0) return
        const {detencion, diasAcumulados} = totalDet(periodosDetencion)
        setFormState({
            ...formState,
            totalDetencion: detencion,
            diasTotales: diasAcumulados
        })
        onDiasAcumulados(diasAcumulados)
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
                <div className='col-sm-6 col-xl-3 mb-3'>
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
                <div className='col-sm-6 col-xl-3 mb-3'>
                    <label 
                        htmlFor="fechaLib"
                        className="form-label">
                        Fecha de libertad:
                    </label>
                    <input 
                        type="date" 
                        className="form-control" 
                        id="fechaLib"
                        name="fechaLibertad"
                        value={fechaLibertad}
                        onChange={onInputChange}/>
                        
                </div>
                <div className='col-sm-6 col-xl-3 mb-3'>
                    <label className="form-label"
                    id="resultadoDet">Tiempo de detención: </label>
                    <input type="text" 
                    className='form-control bg-secondary bg-opacity-10'
                    name='tiempoDet'
                    value={`${(tiempoDet === 0) ? "" : tiempoDet}`} 
                    
                    readOnly/>
                    
                </div>
                <div className='col-sm-6 col-xl-3 align-self-end mb-3'>
                    <Button variant="outlined" onClick={onDetPeriodo} startIcon={<AddTaskIcon />}>
                        Agregar periodo
                    </Button>
                </div>

            </form>
            <div className="container mt-3 d-flex align-items-center flex-column "
                id="periodosDet">
                <p className='text-center'>Periodos de detención:</p>
                

                    {   (periodosDetencion.length === 0) 
                            ? null
                            : <div className='form-control mb-4 bg-secondary bg-opacity-10'>
                                {
                                    periodosDetencion.map((periodo,i) => (
                                    <p className='text-center' key={parseInt(Math.random()*5000)}>
                                    {i+1}° Periodo: <b>{periodo.fechaDetPer.split('-').reverse().join("/")}</b> al <b>{periodo.fechaLibPer.split('-').reverse().join("/")}</b> : {periodo.detencion}
                                    </p>
                                    ))}
                            </div>
                             

            
     
                    }
                <div className='mb-4'>
                    
                    <Button 
                        variant="outlined" 
                        onClick={onResetForm} 
                        startIcon={<CleaningServicesOutlinedIcon />}
                        sx={{mx:1}}
                        color="error">
                            Reset
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={onCalcularTotal}
                        startIcon={<FunctionsOutlinedIcon />}
                        sx={{mx:1}}>
                            Total
                    </Button>

                </div>
            </div>
            
            <label className="form-label"
                id="resultadoTotalDet">Tiempo total de detención: </label>
            <input type="text" 
                   className='form-control bg-secondary bg-opacity-10'
                    name='totalDetencion'
                    value={`${(totalDetencion === 0) ? "" : totalDetencion}`} 
                    
                    readOnly/>


        </div>
    )
}
