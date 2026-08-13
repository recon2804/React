import "./Example.css"

const Example = () => {
    let title = "Můj první titulek"

    const vychoziPole = [`David`, `Hermiona`, `Harry`]
    const student1 = vychoziPole[0]
    const student2 = vychoziPole[1]
    const student3 = vychoziPole[2]
    console.log(student1, student2, student3) 

    /*const [student1, student2, student3] = vychoziPole
    console.log(student1, student2, student3)*/

    const buttonHandler = () => {
        title = "Nový title"
    }

    return <div>
            <h2>{title}</h2>
            <button type="button" onClick={buttonHandler}>Změnit titulek</button>
            </div>
}


export default Example