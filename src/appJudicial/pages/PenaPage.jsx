import { calculoModificacionesPena } from "../helpers/calculoModificacionesPena"
import { useForm } from "../hooks/useForm"

export const PenaPage = () => {

    const {art41bis, art41quater,  art44,penaMaximaAnios, penaMaximaMeses, penaMaximaDias, 
        penaMinimaAnios, penaMinimaMeses, penaMinimaDias, penaAplicable, setFormState, onInputChange, onResetForm,formState} = useForm(
        {art41bis: false,  art41quater: false, art44: false, 
        penaMaximaAnios : 0, penaMaximaMeses : 0, penaMaximaDias : 0, 
        penaMinimaAnios:0, penaMinimaMeses: 0, penaMinimaDias: 0,
        penaAplicable: ""}
    )
    
    const handleOnChange = ({target}) =>{
        const {name} = target
        if(formState[name]){
            setFormState({
                ...formState,
                [name] : false
            })
        }else{
            setFormState({
                ...formState,
                [name] : true
            })
        }
    }

    
    const onCalculoPena = (e) =>{
        e.preventDefault()
        const {penaAplicable} = calculoModificacionesPena(art41bis, art41quater, art44, {anios: penaMaximaAnios, meses: penaMaximaMeses
        , dias: penaMaximaDias}, {anios: penaMinimaAnios, meses: penaMinimaMeses, dias: penaMinimaDias})
        setFormState({
            ...formState,
            penaAplicable: penaAplicable
        })
    }
    




  return (
    <div className="pt-2">
    <form className="form-control mt-3 pt-5">
            <h2 className="text-center mb-4">Atenuantes y agravantes generales</h2>
            
            <h3 className="my-3 text-center text-md-start">Introduzca la pena minima: </h3>
            
                <div className="container row g-4">
                    <div className="col-4 justify-content-center align-items-center">
                        <label htmlFor="diasMin" className="form-label">Días</label>
                        <input type="number" className="form-control text-center rounded" id="diasMin"
                        min="0" max="30"
                        onChange={onInputChange}
                        value={penaMinimaDias}
                        name="penaMinimaDias"
                        />
                    </div>
                
                    <div className="col-4 justify-content-center align-items-center">
                        <label htmlFor="mesMin" className="form-label">Meses</label>
                        <input type="number" className="form-control text-center rounded" id="mesMin" 
                        min="0" max="12"
                        onChange={onInputChange}
                        value={penaMinimaMeses}
                        name="penaMinimaMeses" 
                        />
                    </div>

                    <div className="col-4 justify-content-center align-items-center">
                        <label htmlFor="aniosMin" className="form-label">Años</label>
                        <input type="number" className="form-control text-center rounded" id="aniosMin" 
                        min="0" max="50"
                        onChange={onInputChange}
                        value={penaMinimaAnios}
                        name="penaMinimaAnios"
                        />
                    </div>
 
                </div>

            <h3 className="my-3 text-center text-md-start">Introduzca la pena maxima</h3>
            <div className="container row g-4">

                <div className="col-4 justify-content-center align-items-center">
                    <label htmlFor="dias" className="form-label">Días</label>
                    <input type="number" className="form-control text-center rounded" id="diasMax"
                        min="0" max="30"
                        onChange={onInputChange}
                        value={penaMaximaDias}
                        name="penaMaximaDias"
                        />
                </div>

                <div className="col-4 justify-content-center align-items-center">

                    <label htmlFor="mesMax" className="form-label">Meses</label>
                    <input type="number" className="form-control text-center rounded" id="mesMax" 
                        min="0" max="12"
                        onChange={onInputChange}
                        value={penaMaximaMeses}
                        name="penaMaximaMeses" 
                        />
                </div>
                <div className="col-4 justify-content-center align-items-center">
                    <label htmlFor="aniosMax" className="form-label">Años</label>
                    <input type="number" className="form-control text-center rounded" id="aniosMax" 
                        min="0" max="50" 
                        onChange={onInputChange}
                        value={penaMaximaAnios}
                        name="penaMaximaAnios"
                        />
                </div>
   
            </div>
            <h3 className="my-3 text-center text-md-start">Seleccione agravantes o atenuantes</h3>
            <div className="row mt-4 g-3">
                
                <div className="form-check col-6 col-md-4">
                    <input className="form-check-input" type="checkbox" id="41bis" 
                        onChange={handleOnChange}
                        checked={art41bis}
                        name="art41bis"/>
                    <label className="form-check-label" htmlFor="41bis">
                        Art. 41 bis - arma de fuego
                    </label>
                </div>
                {/* <div className="form-check col-3">
                    <input className="form-check-input" type="checkbox" id="41ter"
                    onChange={onInputChange}
                    value={art41ter}
                    name="art41ter" />
                    <label className="form-check-label" htmlFor="41ter">
                        Art. 41 ter - Arrepentido
                    </label>
                </div> */}
                <div className="form-check col-6 col-md-4">
                    <input className="form-check-input" type="checkbox" id="41quater" 
                    onChange={handleOnChange}
                    checked={art41quater}
                    name="art41quater" />
                    <label className="form-check-label" htmlFor="41quater">
                        Art. 41 quat - Participacion de menores
                    </label>
                </div>
                {/* <div className="form-check col-3">
                    <input className="form-check-input" type="checkbox" id="41quinquies"
                    onChange={onInputChange}
                    value={art41quinquies}
                    name="art41quinquies" />
                    <label className="form-check-label" htmlFor="41quinquies">
                        Art. 41 quinquies - Terrorismo 
                    </label>
                </div> */}
                <div className="form-check col-6 col-md-4">
                    <input className="form-check-input" type="checkbox" id="44tent" 
                    onChange={handleOnChange}
                    checked={art44}
                    name="art44" />
                    <label className="form-check-label" htmlFor="44tent">
                        Art. 44 - Tentativa
                    </label>
                </div>
                {/* <div className="form-check col-3">
                    <input className="form-check-input" type="checkbox" id="46participacion" 
                    onChange={onInputChange}
                    value={art46}
                    name="art46"/>
                    <label className="form-check-label" htmlFor="46participacion">
                        Art. 46 - Participacion secundaria
                    </label>
                </div> */}

            </div>
            
        <div className="d-flex justify-content-end justify-content-md-start">
            <button
            className="btn btn-outline-danger mt-4"
            onClick={onResetForm}>
            Reset
            </button>
            <button
            className="btn btn-outline-primary mt-4 mx-2"
            onClick={onCalculoPena}>
            Calcular
            </button>
        </div>
            <label className="form-label mt-4">
                Pena
            </label>
            <input type="text" 
                   className='form-control bg-secondary bg-opacity-10'
                    name='penaAplicable'
                    value={penaAplicable} 
                    readOnly/>


        </form>
       
    </div>
  )
}
