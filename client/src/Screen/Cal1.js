import React , {useState}from 'react'
import { data } from 'react-router-dom';

function Cal1() {
     const [data,setdata]=useState({
        num1:(""),
        num2:(""),
        res:(""),
     });
          const changeHandler=(e)=>{
             setdata({...data,[e.target.name]:Number(e.target.value)});
          };
          function sumClick(){
              setdata({...data,res:data.num1+data.num2});
          }
          function mulClick(){
               setdata({...data,res:data.num1*data.num2});
          }
          function divClick(){
               setdata({...data,res:data.num1/data.num2});
          }
          function ClearClick(){
               setdata({num1:(0),num2:(0),res:(0)});
    
          }
        return ( 
          <div>
            <b>Enter first Number:</b>
            <input type="number" name="num1"value={data.num1} onChange={changeHandler}/><br/>
            <b>Enter Second Number:</b>
            <input type="number" name="num2" value={data.num2} onChange={changeHandler}/><br/>
            <b>Result:</b>{data.res}<br/><br/>
            <button className="btn btn-info m-1"onClick={sumClick}>Sum</button>
            <button className="btn btn-primary"onClick={mulClick}>Mul</button>
            <button className="btn btn-success m-1"onClick={divClick}>Div</button>
            <button className="btn btn-danger"onClick={ClearClick}>Clear</button>
          </div>
          
        )   
}
export default Cal1;
