import { Button } from "@mui/material"
import { calcularAgotamiento } from "../helpers"
import { useForm } from "../hooks/useForm"
import CleaningServicesOutlinedIcon from '@mui/icons-material/CleaningServicesOutlined';
import FunctionsOutlinedIcon from '@mui/icons-material/FunctionsOutlined';

export const AgotamientoPena = ({condena}) => {

  const {onInputChange, setFormState, formState, fechaComputo, agotamientoPena, onResetForm} = useForm({fechaComputo: "", agotamientoPena: ""})

  const onCalculoAgotamiento = (e) =>{
    e.preventDefault();
    if(isNaN(condena[0]) || (fechaComputo === "")) return;
    const {agotamiento} = calcularAgotamiento(condena,fechaComputo);
    setFormState({
      ...formState,
      agotamientoPena: agotamiento
    });

  }
  
  
  return (
    <form
    className="form-control mt-3 p-3 d-flex flex-column justify-content-between">
      <div className="container py-2">
        <h2 className="text-center mb-3">Calcule la fecha de agotamiento de la pena
        </h2>
        <label htmlFor="fechaComp" className="form-label mb-2">Introduzca la fecha actual o de
            computo</label>
        <input type="date" className="form-control" id="fechaComp" 
          name="fechaComputo"
          onChange={onInputChange}
          value={fechaComputo}/>
          <div className="d-flex justify-content-end pe-3 mt-2">
            <Button 
                        variant="outlined" 
                        onClick={onResetForm} 
                        startIcon={<CleaningServicesOutlinedIcon />}
                        sx={{mt: 4}}
                        color="error">
                            Limpiar
            </Button>
            {/* <button
              className="btn btn-outline-danger mt-4"
              onClick={onResetForm}>
              Reset
            </button> */}
            <Button
                        variant="outlined"
                        onClick={onCalculoAgotamiento}
                        startIcon={<FunctionsOutlinedIcon />}
                        sx={{ mt: 4, ml:2, mr:1}}
                        >
                            Total
            </Button>
            {/* <button
              className="btn btn-outline-primary mt-4 mx-2"
              onClick={onCalculoAgotamiento}>
              Calcular
            </button> */}

          </div>
        <label htmlFor="agotamientoPena" className="form-label mt-4 mb-2 "> Fecha de agotamiento: </label>
        <input className="form-control text-center bg-secondary bg-opacity-10"
            placeholder=""
            id="agotamientoPena" 
            name="agotamientoPena"
            value={agotamientoPena}
            readOnly />

      </div>

</form>
  )
}
