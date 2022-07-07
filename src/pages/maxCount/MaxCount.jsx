import React, {useRef,useState,useEffect} from 'react'

const MaxCount = () => {
    const [timer, setTimer] = useState(10)
    const [clicks, setClicks] = useState(0)
    const id = useRef(null)

    const clear = () => window.clearInterval(id.current)

    useEffect(() => { 
        id.current = setInterval(() => {
            setTimer((time) => time - 1)
        }, 1000);

        return clear
    },[])

    
    useEffect(() => { 
        if (timer === 0) {
            clear()
        }
    }, [timer])

    const handleClick = () => {
        setClicks((prev) => prev + 1)
    }

    return (
        <div className="containerMaxCount">
            <h1>N° of clicks until the timer expires</h1>
            <div className="maxCount">
                <h1>{clicks}</h1>
                <h2>{`Time left: ${timer} seconds`}</h2>
                {timer > 0 ? <button onClick={handleClick}>+</button> : null}
            </div>
        </div>
    );
}

export default MaxCount;