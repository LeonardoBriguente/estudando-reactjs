import React from 'react'

const JsxExamples = () => {
    const name = 'John Doe';

    const user = {
        firstName: 'John',
        lastName: 'Doe',
        age: 25
    };

    function getGreetings(name) {
        if (name) {
            return <p>Olá, {name}</p>
        }
        return <p>Olá, visitante</p>
    }

    const userIsLogged = true;
    const userRole = 'admin';

    const users = [
        {
            id: 1,
            name: 'John Doe',
            age: 25
        },
        {
            id: 2,
            name: 'Jane Doe',
            age: 30
        },
        {
            id: 3,
            name: 'Leonidas Esteban',
            age: 35
        }	
    ]

  return (
    <div>
        {/* BÁSICO */}
        <h2>Conteúdo que o usuário vai ver</h2>
        <p>Olá, {name}</p>
        <p>Usuário: {user.firstName} {user.lastName}, {user.age} anos</p>

        <p>{getGreetings(name)}</p>
        <p>{getGreetings()}</p>
        {/* <p>{getGreetings("Leonidas")}</p> */}

        {/* DIFERENÇAS DO HTML */}
        <div className="alguma-coisa"> Estilizar esse cara, por exemplo</div>

        <button onClick={() => alert("Teste do onClick")}>Clique em mim</button>

        <input type="text" placeholder="Digite alguma coisa" />

        {/* RENDERIZAÇÃO CONDICIONAL */}
        {userIsLogged ? <p>Caso: Está logado</p> : <p>Caso: Não está logado</p>}

        <p>{userRole === "admin" && "Você é um admin"}</p>

        {/* RENDERIZAÇÃO DE LISTAS */}
        <div>
            <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.id} - {user.name}, {user.age} anos
                </li>
            ))}
            </ul>
        </div>
    </div>
  )
}

export default JsxExamples