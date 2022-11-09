import { condenaRestante } from "../helpers/"
import { useForm } from "../hooks/useForm"


export const PenaImpuesta = ({diasAcumulados,onCondena}) => {

    const {formState, onInputChange, onResetForm, setFormState, condenaDias, condenaMes, condenaAnios, pendiente, condena } = useForm({condenaDias: 0,condenaMes: 0,condenaAnios: 0, pendiente: "", condena: []})

    const onCalcularCondenaRestante = (e) =>{
        e.preventDefault()
        const {condena, pendiente} = condenaRestante(diasAcumulados, condenaDias, condenaMes, condenaAnios)
        setFormState({
            ...formState,
            condena,pendiente
        })
        onCondena(condena)

    }

    return (
        <form
            className="form-control mt-3 p-3 me-2 d-flex flex-column justify-content-between">
            <h2 className="text-center mb-1 px-5">Introduzca el monto de la condena</h2>
            <div className="container row g-4">
                <div className="col-lg-4 col-xxl-3 justify-content-center align-items-center">
                    <label htmlFor="anios" className="form-label">Años</label>
                    <input type="number" className="form-control text-center rounded" id="anios" 
                        min="0" max="50" 
                        name="condenaAnios"
                        onChange={onInputChange}
                        value={`${(condenaAnios === 0) ? "" : condenaAnios}`}/>
                </div>
                <div className="col-lg-4 col-xxl-3 justify-content-center align-items-center">

                    <label htmlFor="meses" className="form-label">Meses</label>
                    <input type="number" className="form-control text-center rounded" id="mes" 
                        min="0" max="12" 
                        name="condenaMes"
                        onChange={onInputChange}
                        value={`${(condenaMes === 0) ? "" : condenaMes}`}/>
                </div>
                <div className="col-lg-4 col-xxl-3 justify-content-center align-items-center">

                    <label htmlFor="dias" className="form-label">Días</label>
                    <input type="number" className="form-control text-center rounded" id="dias"
                        min="0" max="30"
                        name="condenaDias"
                        onChange={onInputChange}
                        value={`${(condenaDias === 0) ? "" : condenaDias}`} />

                </div>
                <div className="col-xl-3 d-flex justify-content-start align-items-end mb-4 mb-md-0">
                    <button className="btn btn-outline-danger me-2"
                    onClick={onResetForm}>
                        Reset
                    </button>
                    <button className="btn btn-outline-primary"
                    onClick={onCalcularCondenaRestante}>
                        Calcular
                    </button>

                </div>

            </div>
            <div>
                <label htmlFor="totalCondena" className="form-label ms-2 "> Condena por cumplir: </label>

                <input className="form-control text-center bg-secondary bg-opacity-10"
                    placeholder=""
                    id="totalCondena"
                    name= 'pendiente'
                    value={pendiente}
                    readOnly />
            </div>

        </form>
    )
}
