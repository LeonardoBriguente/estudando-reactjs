# Instalação do React + Vite
**Comandos:**
* *npx create-vite .* - Comando para criar projeto react com Vite
* Depois: Selecionar o framework desejado, no caso react;
* Selecionar a variante: Linguagem que deseja trabalhar, no caso JS;
* *npm install* - Para instalar todas as dependências do projeto;
* Por fim, *npm run dev* - Para rodar o programa.


## Estrutura de Pastas
**/node_modules:** Pasta onde todas as dependências são instaladas.

**/public:** Pasta para o /assets do index.

**/src:** Pasta que conterá todo o projeto;
- **/assets;**
- **App.css:** 
- **App.jsx:** O que tem no meu projeto react no momento em que é criado. *É chamado no main.jsx como componente.*
- **index.css:** 
- **main.jsx:** arquivo que busca tudo do projeto. Sai do html e vem para o main.jsx e ele roda a  aplicação.

**.gitignore:** Itens ignorados pelo Git;

**eslint.config.js:** itens de configuração do eslint - organizador de código;

**index.html:** index do projeto;

**package.json:** Arquivos com todas as dependências instaladas no projeto e scripts para rodar o projeto;

**vite.config.js:** arquivo de configuração inicial do vite.


# Componentes
Criar pastas **/Components** em **/src** e dentro dela, os componentes da aplicação. *Por convenção, primeira letra maiúscula.*
* Criar uma função dentro do arquivo com o mesmo nome do arquivo.

## Estrutura de um componente:

```// Componente filho
// Estrutura de um componente:
// Criação da função
function FuncionalComponent(){
    // Retorna um objeto com jsx
    return (
        <h2>Testando componente</h2>
    )
}
// Exporta todos os dados
export default FuncionalComponent;
```

## Importando Componente:
Para importar, o componente deve ter uma exportação default da função:
`export default FuncionalComponent;`

Ou de maneira resumida e mais usada:
```
export default function FunctionalComponent(){
  return(
    // Seu código aqui
  )
}
```

O arquivo que receberá essa importação deve ter a linha que faz a importação:
`import ApelidoDoImport from "caminho";`

Exemplo:
`import FuncionalComponent from "./components/FunctionalComponent";`

Por fim, deve-se adicionar o componente em formato de tag.
`<FuncionalComponent />`

Comentários em JSX são feitos assim:
`{/* Comentário */}`

## Componentes de Classe
* Defasado, porém alguns locais ainda usam.

Como fazer: Criar uma classe e estender a um componente pai por meio de herança:
`class ClassComponent extends React.Component {}`

**Importar {React} para que funcione o componente de classe:**
`import React from "react";`

Colocar método que vai renderizar o componente e retornar da maneira já feita:
```
class ClassComponent extends React.Component {`
    // Método que renderiza os componentes
    render (){
        return (
            <>
                <h2>Componente de Classe</h2>
            </>
        )
    }
}
```

Por fim, exportar como de costume. E importar no arquivo que está chamando.

# Props
Para componentes com dados dinâmicos: Para isso utilizamos o Props (propriedade) passado como parâmetro.
- Temos o conceito de um componente pai enviando o props ao filho, que fará algo com ele.
- Temos o props como um obj.

Arquivo PropsExample:
```
const PropsExample = (props) => {
  return (
    <div>
        <h3>Olá {props.nome}</h3>
        <p>Eu tenho {props.idade} anos</p>
    </div>
  )
}
export default PropsExample
```

Arquivo App:
```
function App() {
  return (
    <>
      <h1>Hello React</h1>
      {/* Utilizando componente importado no JSX */}
      <FuncionalComponent />
      <ClassComponent />
      <PropsExample nome="Leonardo" idade={21}/>
    </>
  )
}
```
- Os parâmetros são passados na chamada do componente com nome do parâmetro e valor.

**Utilizando a Desestruturação de OBJ:**
* Recurso do JS;
Arquivo PropsExample:
```
const PropsExample = ({nome, idade}) => {
  return (
    <div>
        <h3>Olá {nome}</h3>
        <p>Eu tenho {idade} anos</p>
    </div>
  )
}
export default PropsExample
```

* Mantemos o mesmo padrão para o App.jsx

# JSX
* O JSX funciona como se fosse o html do React.
* Dentro de uma função, antes do retorno, podemos ter códigos JS e lógica. Também podendo ser usado o conceito de props nessa lógica.

Exemplo:
```
const JsxExamples = () => {
    const name = 'John Doe';
    const user = {
        firstName: 'John',
        lastName: 'Doe',
        age: 25
    };
  return (
    <div>
        <h2>Conteúdo que o usuário vai ver</h2>
        <p>Olá, {name}</p>
    </div>
  )
}
```

* No React, tudo o que estiver entre chaves { } será executado como JS.

Utilizando função dentro da lógica do componente:
```
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
        <p>{getGreetings(name)}</p>
        <p>{getGreetings()}</p>
    </div>
  )
}
```
* Também é possível passar parâmetro por valor: `getGreeting("Leonidas")`

## Diferenças do HTML
O JSX possui palavras reservadas e por isso, a estilização é feita de maneira diferente.
- É utilizado o className para estilizar uma tag e o conceito de camelCase nos atributos.

Exemplos:
```
{/* DIFERENÇAS DO HTML */}
<div className="alguma-coisa"> Estilizar esse cara, por exemplo</div>

 <button onClick={() => alert("Teste do onClick")}>Clique em mim</button>

<input type="text" placeholder="Digite alguma coisa" />
```

## Renderização condicional
Supondo que determinado conteúdo deve ser apresentado a partir de determinada condição
```
const JsxExamples = () => {
        const userIsLogged = true;
        return <p>Olá, visitante</p>
    }
  return (
    {/* RENDERIZAÇÃO CONDICIONAL */}
     {userIsLogged ? <p>Caso: Está logado</p> : <p>Caso: Não está logado</p>}
  )
}
```

## Renderização de Listas
Exemplo:
```
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
)
```
* Pelos componentes do react serem dinâmicos, ele acaba necessitando de identificadores únicos em cada elemento para lidar melhor com cada um deles. Portanto, foi utilizado os indicadores da própria tabela.

# Gerenciamento de Estado
* O React necessita de algum sinal atualizar o conteúdo da tela.
```
const UseStateComponent = () => {
    let  count = 0;
    const increment = () => {
        count++;
        console.log(count);
    }
  return (
    <div>
        <h1>Contador: {count}</h1>
        <button onClick={increment}>Incrementar</button>
    </div>
  )
}
export default UseStateComponent
```
* Nesta situação, o valor da variável muda, mas não altera nada na tela. Pois a alteração de valores de variável não emite o sinal que o React necessita para atualizar a tela.

**Utilizando useState para alterar o estado**
```
import {useState} from 'react'
//UseState == Hook de gerenciamento de estado

const UseStateComponent = () => {
    const [count, setCount] = useState(0)
    // Var de consulta, Var de atualização = useState(Valor inicial) 
    const increment = () => {
        setCount(count + 1);
        console.log(count);
    }
    
  return (
    <div>
        <h1>Contador: {count}</h1>
        <button onClick={increment}>Incrementar</button>
    </div>
  )
}
export default UseStateComponent
```

### Previous State
Forma mais segura de capturar o valor anterior da variável. Isso é importante, especialmente em situações onde múltiplas atualizações dependem do estado atual. Se você usar o estado diretamente, pode encontrar problemas devido ao comportamento assíncrono das atualizações de estado em React.
Exemplo:
```
const increment = () => {
        //maneira mais segura de atualizar o valor
        setCount((prevCount) => prevCount + 1);
        // setCount(count + 1);
        console.log(count);
    }
```
# Eventos
Um evento nada mais é do que a reação de um elemento como resposta a determinada ação do usuário.
Exemplo:
```
const EventHandlingExamples = () => {
  return (
    <div>
        <button onClick={() => alert("Você disparou um evento")}>Clique aqui</button>
    </div>
  )
}
export default EventHandlingExamples
```
* Neste caso, o evento ocorre por meio de uma função anônima para ele não ser executado assim que a página for carregada.

## Eventos com parâmetro
```
const EventHandlingExamples = () => {
    const handleGreet = (name) => {
        alert(`Olá ${name}`);
    }
    
  return (
    <div>
        <button onClick={() => alert("Você disparou um evento")}>Clique aqui</button> <br /> 
        
        <button onClick={() => handleGreet("Ana")}>Dizer Olá Ana</button>
    </div>
  )
}  
export default EventHandlingExamples
```

# Estilos no React
Normalmente, é utilizado o arquivo *index.css* para fazer a estilização global dos elementos. Esse arquivo é linkado no arquivo principal da aplicação *main.jsx.*

## Maneiras de atribuir estilos:
### Inline
* Criar um objeto que conterá os estilos e aplicá-los:

Exemplo:
```
const StylesExamples = () => {
    //inline styles
    const inlineStyles = {
        color: "blue",
        fontSize: "30px"
    }

  return (
    <div>
        <h2 style={inlineStyles}>Estilos Inline</h2>
    </div>
  )
}
```
* Aqui, foi criado o objeto *syles* que contém o objeto com os estilos dentro dele.

### Ter um arquivo de CSS para o componente
* Esse arquivo normalmente é armazenado em uma pasta dedicada a estilos ou junto ao componente e contém o mesmo nome do componente.
* O arquivo CSS funcionará de maneira tradicional ao CSS.

Exemplo:
```
import "./StylesExample.css"
return (
    <div>
        <h2 style={inlineStyles}>Estilos Inline</h2>
        <p className='text'>Arquivo CSS</p>
    </div>
  )
}
```
**Problemas:**
* Há a possiblidade de se ter um "vazamento de estilos" e o estilo acabar sendo passado para os outros componentes.
	* Tendo em vista que o arquivo CSS está presente na pasta *components*

### CSS Módulos
* Consiste na utilização de classes para estilização.
* Maneira segura de utilizar CSS em aplicações.

**Peculiaridades:**
* Deve ser importado como um objeto:
	* `import styles from "./StylesExamples.module.css";"`

Exemplo:
```
import styles from "./StylesExamples.module.css";
return{
  {/* CSS Modules */}
  <p className={styles.textYellow}>Meu CSS Modules</p>
}
```

# Sobre o projeto final
O projeto consiste em um To Do List imples com adição e remoção de tarefas.
