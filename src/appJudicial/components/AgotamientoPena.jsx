import { calcularAgotamiento } from "../helpers"
import { useForm } from "../hooks/useForm"


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
    className="form-control mt-3 p-3">
    <h2 className="text-center mb-3">Calcule la fecha de agotamiento de la pena
    </h2>
    <label htmlFor="fechaComp" className="form-label mb-2">Introduzca la fecha actual o de
        computo</label>
    <input type="date" className="form-control" id="fechaComp" 
      name="fechaComputo"
      onChange={onInputChange}
      value={fechaComputo}/>
      <div className="d-flex justify-content-end">
        <button
          className="btn btn-outline-danger mt-4"
          onClick={onResetForm}>
          Reset
        </button>
        <button
          className="btn btn-outline-primary mt-4 mx-2"
          onClick={onCalculoAgotamiento}>
          Calcular
        </button>

      </div>
    <label htmlFor="agotamientoPena" className="form-label mt-4 mb-2 "> Fecha de agotamiento: </label>
    <input className="form-control text-center bg-secondary bg-opacity-10"
        placeholder=""
        id="agotamientoPena" 
        name="agotamientoPena"
        value={agotamientoPena}
        readOnly />

</form>
  )
}
