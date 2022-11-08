
export const PenaPage = () => {
  return (
    <div className="p-2">
    <form className="form-control mt-3 p-3">
            <h2 className="text-center mb-3">Atenuantes y agravantes generales</h2>
            
            <h3 className="my-3">Introduzca la pena minima: </h3>
            
                <div className="container row g-4">
                    <div className="col-4 justify-content-center align-items-center">
                        <label htmlFor="anios" className="form-label">Años</label>
                        <input type="number" className="form-control text-center rounded" id="aniosMin" 
                        min="0" max="50" 
                        />
                    </div>
                    <div className="col-4 justify-content-center align-items-center">

                        <label htmlFor="meses" className="form-label">Meses</label>
                        <input type="number" className="form-control text-center rounded" id="mesMin" 
                        min="0" max="12" 
                        />
                    </div>
                    <div className="col-4 justify-content-center align-items-center">

                        <label htmlFor="dias" className="form-label">Días</label>
                        <input type="number" className="form-control text-center rounded" id="diasMin"
                        min="0" max="30"
                        />

                    </div>
                </div>

            <h3 className="my-3">Introduzca la pena maxima</h3>
            <div className="container row g-4">
                <div className="col-4 justify-content-center align-items-center">
                    <label htmlFor="anios" className="form-label">Años</label>
                    <input type="number" className="form-control text-center rounded" id="aniosMax" 
                        min="0" max="50" 
                        />
                </div>
                <div className="col-4 justify-content-center align-items-center">

                    <label htmlFor="meses" className="form-label">Meses</label>
                    <input type="number" className="form-control text-center rounded" id="mesMax" 
                        min="0" max="12" 
                        />
                </div>
                <div className="col-4 justify-content-center align-items-center">

                    <label htmlFor="dias" className="form-label">Días</label>
                    <input type="number" className="form-control text-center rounded" id="diasMax"
                        min="0" max="30"
                        />

                 </div>
            </div>
            <h3 className="my-3">Seleccione agravantes o atenuantes</h3>
            <div className="row mt-4 g-3">
                <div class="form-check col-3">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                        Art. 44 Tentativa
                    </label>
                </div>
                <div class="form-check col-3">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                    <label class="form-check-label" for="flexCheckChecked">
                        Art. 46 Participacion secundaria
                    </label>
                </div>
                <div class="form-check col-3">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                    <label class="form-check-label" for="flexCheckChecked">
                        Art. 47 Participacion restringida
                    </label>
                </div>
                <div class="form-check col-3">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                    <label class="form-check-label" for="flexCheckChecked">
                        Art. 41 ter Arrepentido
                    </label>
                </div>
                <div class="form-check col-3">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                    <label class="form-check-label" for="flexCheckChecked">
                        Art. 41 bis - Uso de arma de fuego
                    </label>
                </div>

                <div class="form-check col-3">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                    <label class="form-check-label" for="flexCheckChecked">
                        Art. 41 quater - Participacion de menores
                    </label>
                </div>
                <div class="form-check col-3">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                    <label class="form-check-label" for="flexCheckChecked">
                        Art. 41 quinquies - Terrorismo (?)
                    </label>
                </div>

            </div>
            
            
            <input type="button" value="calcular"
                className="mt-3" id="calcularTent" />
            <div className=""
                id="condenaTent">
                Pena tentada: 
            </div>
        </form>
       
    </div>
  )
}
