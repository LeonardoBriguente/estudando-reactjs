// Componente Pai
import "./App.css";

// importar componente filho
import FuncionalComponent from "./components/FunctionalComponent";
import ClassComponent from "./components/ClassComponent";

function App() {

  return (
    <>
      <h1>Hello React</h1>
      {/* Utilizando componente importado no JSX */}
      <FuncionalComponent />
      <ClassComponent />
    </>
  )
}

export default App
