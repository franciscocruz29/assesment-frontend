# Assesment Frontend

El objetivo de esta misión es poner en práctica lo que has aprendido en el programa. Los temas que se cubrirán son: Scrum, Git, HTML y CSS, JavaScript y React.

La misión consta de dos partes: primero deberás construir un proyecto en React y después se debe responder una serie de preguntas.

## Proyecto

[The fake store](assesmet-frontend.netlify.app)

## Preguntas

**¿Cuáles son las ceremonias más importantes de un Sprint y cuál es la idea de cada una?**

- **Sprint planning**: El equipo se reúne para definir las tareas que se van a realizar durante el Sprint. Por su lado, el “product owner” prioriza lo más importante del “product backlog”.

- **Daily meetings**: Reuniones de máximo 15 minutos para responder 3 preguntas fundamentales: ¿Qué hiciste ayer? ¿En qué trabajarás hoy? ¿Qué obstáculos han surgido?

- **Sprint review**: En esta ceremonia se comparte lo que se ha completado durante el Sprint. La retroalimentación es muy importante en este momento.

- **Retrospective**: Se realiza al final del Sprint para revisar la forma en la que trabajó el equipo.

**¿Qué son los Wireframes? Nombra al menos una herramienta que podamos utilizar.**

El wireframe es un prototipo de página web o de una aplicación. Es una idea de como se vería la página o la aplicación. Como herramientas para crear wireframes se puede usar: Figma o Adobe XD.

**Explicar la diferencia entre var, let y const. Y dar un ejemplo en qué caso se utilizará.**

- **var**: Es una variable que puede ser reasignada pero su uso no es recomendable.

```js
var greeting = "Hello World";
var times = 4;
if (times > 3) {
  var greeting = "Goodbye";
}
console.log(greeting); // "Goodbye"
```
- **let**: Es una variable que puede ser cambiada en cualquier momento.

```js
let greeting = 'say Hi';
greeting = 'say Hello instead';

console.log(greeting); // say Hello instead
```
- **const**: Es una variable que no puede ser cambiada.
```js
const greeting = 'say Hi';
greeting = 'say Hello instead'; // error: Assignment to constant variable.
```
***¿Cuáles son los tres comandos que se pueden utilizar para crear una nueva rama llamada rama-1?***

`$ git checkout -b rama-1`

`$ git branch rama-1`

`$ git branch --track rama-1 origin/<remote_branch>`

***Explicar la diferencia entre git merge y git rebase.***

El `git rebase` unifica las ramas dejando un arbol lineal. El `git merge` aun deja el gráfico de las ramas.

El `git rebase` unifica las ramas perdiendo el historial de los commit y el `git merge` no. 

***¿Cuál es la diferencia entre Pull Request (PR) y el comando git pull?***

Básicamente un `pull request` es una petición para integrar nuestras propuestas o cambios de código a un proyecto.

El comando `git pull` se emplea para extraer y descargar contenido desde un repositorio remoto y actualizar al instante el repositorio local para reflejar ese contenido.

***¿Qué es el Virtual DOM?***

El DOM (Document Object Model) es esencialmente un modelo o representación gráfica del documento de nuestra aplicación web creado por el navegador, sobre el cual éste aplica los cambios necesarios en cada actualización de estado o evento.

El Virtual DOM es una representación del DOM guardada en memoria, que actúa de intermediario entre los estados de la aplicación y los estados del DOM (vistos por el usuario). Cuando ocurre un cambio en la aplicación web, el virtual DOM interpreta dichos cambios y calcula la manera más eficiente de actualizar el DOM para que renderice la menor cantidad de cambios posibles.

***Dado el siguiente codePen, el cual solo tiene un HTML, por medio de css llegar a esta respuesta. Imagen. (Para mostrar los servicios debes usar CSS Flexbox o CSS Grid).***

```css
.c-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.c-section__title {
  grid-column: 1/3;
  font-family: Arial, Helvetica, sans-serif;
  background: black;
  color: white;
  text-align: center;
  padding: 1em;
  margin-left: 2.7em;
  margin-right: 2.7em;
}

.c-services {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column: 1/3;
  gap: 1em;
  padding: 1em;
  margin-left: 3em;
  margin-right: 3em;
}

.c-services__item {
  background: #f0f0f0;
  border-radius: 8px;
  padding: 2em;
  list-style-type: none;
}

.c-services__item:hover {
  box-shadow: 0 8px 4px -2px gray;
}

h3 {
  font-family: Georgia, serif;
  margin-left: 3em;
  padding-bottom: 1em;
}

p {
  font-family: Arial, Helvetica, sans-serif;
}
```