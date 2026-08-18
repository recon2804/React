const App = () => {

const vychoziPole = [5, 6, 7, 8, 9]
const novePole = vychoziPole.map( (oneNumber) => {
  return oneNumber + 10
})

const data = [
    {id: 1, name: `Vynést koš`},
    {id: 2, name: `Uklidit kuchyň`},
    {id: 3, name: `Zajít do fitka`},
    {id: 4, name: `Nakoupit`},
    {id: 5, name: `Nakrmit kočku`},
]

const vymazaneId = 3

const vyslednePole = data.filter( (oneTask) => {
  return oneTask.id != vymazaneId
});

const vysledek = data.map ( (oneTask) => {
  return oneTask.name
})

  return <h1>Test</h1>
}

export default App