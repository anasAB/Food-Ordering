

const Ingredients = (props) => {
    const { Ingredients } = props

    let test = Object.keys(Ingredients).map(item => <li>{item}:{Ingredients[item]}</li>)




    return (
        <div>
            {test}
        </div>
    )







}

export default Ingredients