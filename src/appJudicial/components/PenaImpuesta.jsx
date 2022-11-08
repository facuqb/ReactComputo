

export const PenaImpuesta = () => {
    return (
        <form
            className="form-control mt-3 p-3 me-2 d-flex flex-column justify-content-between">
            <h2 className="text-center mb-1 px-5">Introduzca el monto de la condena</h2>
            <div className="container row">
            <div className="col-3 justify-content-center align-items-center">


            <label htmlFor="anios" className="form-label">Años</label>
                    <input type="number" className="form-control text-center rounded" id="anios" 
                        min="0" max="50" />
                </div>
                <div className="col-3 justify-content-center align-items-center">

                    <label htmlFor="meses" className="form-label">Meses</label>
                    <input type="number" className="form-control text-center rounded" id="mes" 
                        min="0" max="12" />
                </div>
                <div className="col-3 justify-content-center align-items-center">

                    <label htmlFor="dias" className="form-label">Días</label>
                    <input type="number" className="form-control text-center rounded" id="dias"
                        min="0" max="30" />

                </div>
                <div className="col-3 d-flex justify-content-end align-items-end">
                    <button className="btn btn-outline-primary">
                        Calcular
                    </button>

                </div>

            </div>
            <div>
                <label htmlFor="totalCondena" className="form-label ms-2"> Condena por cumplir: </label>

                <input className="form-control text-center"
                    placeholder=""
                    id="totalCondena" readOnly />
            </div>

        </form>
    )
}
