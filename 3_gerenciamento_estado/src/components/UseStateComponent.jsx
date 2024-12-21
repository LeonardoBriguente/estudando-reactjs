import {useState} from 'react'
//UseState == Hook de gerenciamento de estado
// Sempre que vamos alterra o vaor de algo, usar useState
// Se for somente exibição de dados, poe-se usar variável ou state.

const UseStateComponent = () => {
    const [count, setCount] = useState(0)
    // Var de consulta, Var de atualização = useState(Valor inicial)

    const increment = () => {
        //maneira mais segura de atualizar o valor
        setCount((prevCount) => prevCount + 1);
        // setCount(count + 1);
        console.log(count);
    }

    const [user, setUser] = useState({
        name: 'Lucas',
        age: 25,
        hobbies: ['games', 'movies']
    });

  return (
    <div>
        <h1>Contador: {count}</h1>
        <button onClick={increment}>Incrementar</button>

        <p>
            {user.name}, {user.age} anos e gosta de {user.hobbies.map(hobby => <span>{hobby} </span>)}
        </p>
    </div>
  )
}

export default UseStateComponent