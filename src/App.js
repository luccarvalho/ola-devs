import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/Inicio/SobreMim";

console.log(window.location);

const pagina = window.location.pathname === "/" ? <Inicio /> : <SobreMim />;

function App() {
  return pagina;
}

export default App;
