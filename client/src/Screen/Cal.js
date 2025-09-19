import React, { useState } from 'react'

function Cal() {
    const[number1,setNumber1]=useState(0);
    const[number2,setNumber2]=useState(0);
    const[Result,setResult]=useState(0);

    const changeHandler=(e)=>{
        if(e.target.name==="num1"){
           setNumber1(e.target.value);   
        }
        else{
            setNumber2(e.target.value);
        }
    };
    function sumClick(){
        setResult(Number(number1)+Number(number2))
    }
    function mulClick(){
        setResult(Number(number1)*Number(number2))
    }
    function divClick(){
        setResult(Number(number1)/Number(number2))
    }
    function ClearClick(){
        setNumber1("");
        setNumber2("");
        setResult("");
    }
  return (
    // <div>
    //   <b>Enter first Number:</b>
    //   <input type="number" name="num1"value={number1} onChange={changeHandler}/><br/>
    //   <b>Enter Second Number:</b>
    //   <input type="number" name="num2" value={number2} onChange={changeHandler}/><br/>
    //   <b>Result:</b>{Result}<br/><br/>
    //   <button className="btn btn-info m-1"onClick={sumClick}>Sum</button>
    //   <button className="btn btn-primary"onClick={mulClick}>Mul</button>
    //   <button className="btn btn-success m-1"onClick={divClick}>Div</button>
    //   <button className="btn btn-danger"onClick={ClearClick}>Clear</button>
    // </div>
    <>
   <div className="container mt-5 d-flex justify-content-center">
  <div className="card shadow p-4" style={{ maxWidth: '400px', width: '100%' }}>
    

    <div className="form-group mb-3">
      <label><b>Enter First Number:</b></label>
      <input
        type="number"
        name="num1"
        value={number1}
        onChange={changeHandler}
        className="form-control"
        placeholder="First number"
      />
    </div>

    <div className="form-group mb-3">
      <label><b>Enter Second Number:</b></label>
      <input
        type="number"
        name="num2"
        value={number2}
        onChange={changeHandler}
        className="form-control"
        placeholder="Second number"
      />
    </div>

    <div className="form-group mb-4">
      <label><b>Result:</b></label>
      <div className="alert alert-secondary" role="alert">
        {Result}
      </div>
    </div>

    <div className="d-flex flex-wrap justify-content-between">
      <button className="btn btn-info mb-2 w-48" onClick={sumClick}>Sum</button>
      <button className="btn btn-primary mb-2 w-48" onClick={mulClick}>Mul</button>
      <button className="btn btn-success mb-2 w-48" onClick={divClick}>Div</button>
      <button className="btn btn-danger mb-2 w-48" onClick={ClearClick}>Clear</button>
    </div>
  </div>
</div>
  </>
  )
}

export default Cal
