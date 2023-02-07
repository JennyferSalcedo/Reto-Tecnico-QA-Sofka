export const CreateSpaceshipPage = () => {
  return (
    <div className="mainContainer">
      <div className="container formContainer">
        <form className="prueba">
          <div className="TitleContainer">
            <h4>
              ¿Eres un apasionado por el espacio y quieres crear tu propio
              inventario de naves espaciales?
            </h4>
            <h5>Si es así ¡Empecemos! Descríbeme tu nave espacial:</h5>
          </div>

          <div className="midItem">
            <p className="obligatory">
              Los campos marcados con * son obligatorios
            </p>
          </div>

          <div className="fieldsContainer">
            <div className="row">
              <label htmlFor="weight" className="col labelContainer">
                <span className="labelText">
                  Peso: <span className="obligatory">*</span>
                </span>
                <input
                  type="number"
                  id="weight"
                  name="weight"
                  required
                  placeholder="3500"
                />
              </label>
              <label htmlFor="weight" className="col labelContainer">
                <span className="labelText">Potencia de empuje:</span>
                <input type="number" name="weight" placeholder="2900" />
              </label>
              <label htmlFor="weight" className="col labelContainer">
                <span className="labelText">Peso de carga:</span>
                <input type="number" name="weight" placeholder="118" />
              </label>
            </div>

            <div className="row">
              <label htmlFor="weight" className="col labelContainer">
                <span className="labelText">Altura cohete:</span>
                <input
                  type="number"
                  name="weight"
                  placeholder="Distancia numérica en metros"
                />
              </label>
              <label htmlFor="weight" className="col labelContainer">
                <span className="labelText">Combustible:</span>
                <input type="text" name="weight" />
              </label>
              <label htmlFor="weight" className="col labelContainer">
                <span className="labelText">Velocidad:</span>
                <input type="number" name="weight" placeholder="1200 km/h" />
              </label>
            </div>

            <div className="row">
              <label htmlFor="weight" className="col labelContainer">
                <span className="labelText">¿Tiene celdas fotovoltaicas?:</span>
                <input type="number" name="weight" />
              </label>
              <label htmlFor="weight" className="col labelContainer">
                <span className="labelText">
                  Distancia desde la tierra:
                </span>
                <input
                  type="number"
                  name="weight"
                  placeholder="Distancia numérica en metros"
                />
              </label>
              <label htmlFor="weight" className="col labelContainer">
                <span className="labelText">
                  N° pasajeros:
                </span>
                <input type="number" name="weight" placeholder="100" />
              </label>
            </div>
          </div>
          <div className="buttonContainer">
            <button className="button" type="submit">
              Crear Nave Espacial
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
