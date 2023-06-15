import react, {useState} from 'react';



function HeebsComponent(){
    const [numberToDisplay, setNumberToDisplay] = useState(0)

    function increaseNumber(){
        setNumberToDisplay(currentValue => currentValue + 1)
    }

    function decreaseNumber(){
        setNumberToDisplay(currentValue => currentValue - 1)
    }

    function moreThanTenMessage(){
        if (numberToDisplay > 10){
            return <p>The number being displayed is more than 10</p>
        }
        else{
            return <p>The number being displayed is less than 10</p>
        }
    }



    return (
        <div>
            <p>Heebs component</p>
            <button onClick={increaseNumber}>Increase</button>
            <button onClick={decreaseNumber}>Decrease</button>
            <p>{numberToDisplay}</p>
            {moreThanTenMessage()}
        </div>
        
    )
}

export default HeebsComponent