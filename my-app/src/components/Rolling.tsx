
import { Button, Col } from 'react-bootstrap';
import { Dice } from '../dice';




export function getRandomNumInt(min: number, max: number) {
    var Range = max - min;
    var Rand = Math.random(); 
    return (min + Math.round(Rand * Range)); 
}

export function Rolling({setDigit}:{setDigit:(c:Dice["digit"])=>void}):JSX.Element{
    const handleClick=()=>{
        setDigit(getRandomNumInt(1, 6) )
    }
    return<Col>
        <h1>{setDigit}</h1>
        <Button onClick={handleClick}>Rolling</Button>
        </Col>
} 
