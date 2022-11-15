import { Button } from "@mui/material";
import CleaningServicesOutlinedIcon from "@mui/icons-material/CleaningServicesOutlined";
import FunctionsOutlinedIcon from "@mui/icons-material/FunctionsOutlined";
import Slider from "@mui/material/Slider";
import { condenaRestante } from "../helpers/";
import { useForm } from "../hooks/useForm";

export const PenaImpuesta = ({ diasAcumulados, onCondena }) => {
  const {
    formState,
    onInputChange,
    onResetForm,
    setFormState,
    condenaDias,
    condenaMes,
    condenaAnios,
    pendiente,
    condena,
  } = useForm({
    condenaDias: 0,
    condenaMes: 0,
    condenaAnios: 0,
    pendiente: "",
    condena: [],
  });

  const onCalcularCondenaRestante = (e) => {
    e.preventDefault();
    const { condena, pendiente } = condenaRestante(
      diasAcumulados,
      condenaDias,
      condenaMes,
      condenaAnios
    );
    setFormState({
      ...formState,
      condena,
      pendiente,
    });
    onCondena(condena);
  };

  return (
    <form className="form-control mt-3 p-3 me-2 d-flex flex-column justify-content-between">
      <div className="container py-2">
        <h2 className="text-center mb-1 px-5">
          Introduzca el monto de la condena
        </h2>
        <div className="container row g-4 mt-3">
          <div className="col-lg-4 justify-content-center align-items-center">
            <label htmlFor="anios" className="form-label">
              Años:
              <span className="ms-1 fw-bold">
                {" "}
                {condenaAnios == 0 ? "" : condenaAnios}
              </span>
            </label>
            <Slider
              aria-label="Condena años"
              max={50}
              name="condenaAnios"
              onChange={onInputChange}
              value={condenaAnios}
            />
            {/* <input type="range" className="form-range" id="anios" 
                        min="0" max="50" 
                        name="condenaAnios"
                        onChange={onInputChange}
                        value={condenaAnios}/> */}
          </div>
          <div className="col-lg-4  justify-content-center align-items-center">
            <label htmlFor="meses" className="form-label">
              Meses:
              <span className="ms-1 fw-bold">
                {" "}
                {condenaMes == 0 ? "" : condenaMes}
              </span>
            </label>
            <Slider
              aria-label="Condena mes"
              max={12}
              name="condenaMes"
              onChange={onInputChange}
              value={condenaMes}
            />
            {/* <input type="range" className="form-range" id="mes" 
                        min="0" max="12" 
                        name="condenaMes"
                        onChange={onInputChange}
                        value={condenaMes}/> */}
          </div>
          <div className="col-lg-4 justify-content-center align-items-center">
            <label htmlFor="dias" className="form-label">
              Días:
              <span className="ms-1 fw-bold">
                {" "}
                {condenaDias == 0 ? "" : condenaDias}
              </span>
            </label>
            <Slider
              aria-label="Condena dias"
              max={30}
              name="condenaDias"
              onChange={onInputChange}
              value={condenaDias}
            />
            {/*                     
                    <input type="range" className="form-range" id="dias"
                    min="0" max="30"
                        name="condenaDias"
                        onChange={onInputChange}
                        value={condenaDias} /> */}
          </div>
        </div>
        <div className="d-flex justify-content-start align-items-end mb-4 mt-lg-2 p-lg-1">
          <Button
            variant="outlined"
            onClick={onResetForm}
            startIcon={<CleaningServicesOutlinedIcon />}
            sx={{ mr: 2 }}
            color="error"
          >
            Limpiar
          </Button>
          {/* <button className="btn btn-outline-danger me-2"
                        onClick={onResetForm}>
                        Reset
                    </button> */}
          <Button
            variant="outlined"
            onClick={onCalcularCondenaRestante}
            startIcon={<FunctionsOutlinedIcon />}
          >
            Total
          </Button>
          {/* <button className="btn btn-outline-primary"
                        onClick={onCalcularCondenaRestante}>
                        Calcular
                    </button> */}
        </div>
        <div>
          <label htmlFor="totalCondena" className="form-label ms-2 ">
            {" "}
            Condena por cumplir:{" "}
          </label>

          <input
            className="form-control text-center bg-secondary bg-opacity-10"
            placeholder=""
            id="totalCondena"
            name="pendiente"
            value={pendiente}
            readOnly
          />
        </div>
      </div>
    </form>
  );
};
