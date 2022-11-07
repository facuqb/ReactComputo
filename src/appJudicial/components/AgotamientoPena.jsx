

export const AgotamientoPena = () => {
  return (
    <form
    className="form-control mt-3 p-3">
    <h2 className="text-center mb-3">Calcule la fecha de agotamiento de la pena
    </h2>
    <label htmlFor="fechaComp" className="form-label mb-2">Introduzca la fecha actual o de
        computo</label>
    <input type="date" className="form-control" id="fechaComp" />
    <button
      className="btn btn-outline-primary mt-4 d-block">
      Calcular
    </button>
    <label htmlFor="agotamientoPena" className="form-label mt-4 mb-2"> Fecha de agotamiento: </label>
    <input className="form-control text-center"
        placeholder=""
        id="agotamientoPena" readOnly />

</form>
  )
}
