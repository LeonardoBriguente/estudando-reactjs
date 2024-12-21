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

  return (
    <div>
        <h2>Conteúdo que o usuário vai ver</h2>
        <p>Olá, {name}</p>
        <p>Usuário: {user.firstName} {user.lastName}, {user.age} anos</p>

        <p>{getGreetings(name)}</p>
        <p>{getGreetings()}</p>
        {/* <p>{getGreetings("Leonidas")}</p> */}
    </div>
  )
}

export default JsxExamples