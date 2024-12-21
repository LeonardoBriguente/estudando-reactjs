// Componente Pai
import "./App.css";

// importar componente filho
import FuncionalComponent from "./components/FunctionalComponent";
import ClassComponent from "./components/ClassComponent";
import PropsExample from "./components/PropsExample";

function App() {

  return (
    <>
      <h1>Hello React</h1>
      {/* Utilizando componente importado no JSX */}
      <FuncionalComponent />
      <ClassComponent />
      <PropsExample nome="Leonardo" idade={21} />
    </>
  )
}

export default App