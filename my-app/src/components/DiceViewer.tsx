import {  Dice } from "../dice";

import {Col} from 'react-bootstrap'
import logo from '../assets/1.svg'
import logo2 from '../assets/2.svg'
import logo3 from '../assets/3.svg'
import logo4 from '../assets/4.svg'
import logo5 from '../assets/5.svg'
import logo6 from '../assets/6.svg'

export function changePicture(i:Dice['digit']){
    if (i===1 ){
      return  <img src={logo}  style={{ height: 200, width: 200}} alt={"1"} />
    }
  
    if (i===2 ){
      return  <img src={logo2}  style={{ height: 200, width: 200}} alt={"2"} />
    }
    if (i===3 ){
        return  <img src={logo3}  style={{ height: 200, width: 200}} alt={"3"} />
      }
    if (i===4 ){
        return  <img src={logo4}  style={{ height: 200, width: 200}} alt={"4"} />
      }
    if (i===5 ){
        return  <img src={logo5}  style={{ height: 200, width: 200}} alt={"5"} />
      }
    if (i===6 ){
        return  <img src={logo6}  style={{ height: 200, width: 200}} alt={"6"} />
      }
  }
export function DiceViewer({setPicture}:{setPicture:Dice["digit"]}):JSX.Element{
   changePicture(setPicture)
    return(  <Col>
    
   
    </Col>    
    )
}