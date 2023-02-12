import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { baseUrl,heatTransfer } from '../../../Constant/Api';
import {v4 as uuid} from 'uuid';
import '../../../Assets/CSS/Subjects.css'
import { Table } from 'react-bootstrap';
const HeatTransfer = () => {

    const [questions,setQuestions]=useState([])
    const [inputquestions,setInputquestions]=useState([{id:uuid(),Question:""}]);
    const [render,setRender]=useState(false)

    useEffect(()=>{axios.get(`${baseUrl}/${heatTransfer}`).then((res)=>setQuestions(res.data))},[render]) 

    const submitHandler=(e)=>{
        e.preventDefault();
        axios.post(`${baseUrl}/${heatTransfer}`,inputquestions).then((res)=>{
            if(res.data){
                setRender(!render)
                setInputquestions({Question:""})
            }
        })
    }

    const deleteHandler=(id)=>{
        axios.delete(`${baseUrl}/${heatTransfer}/${id}`).then((res)=>{if(res.data){
            setRender(!render)
        }})
    }

  return (
    <div>
      <div className='sub-head'>
        <h1>Heat Transfer</h1>
        <h3>Add Questions</h3>
        <input type='text'
         placeholder='Enter Important Question'
         onChange={(e)=>{setInputquestions({...inputquestions,Question:e.target.value})}}
         value={inputquestions.Question}
         className='sub-input'/><br/>
         <button onClick={submitHandler} className='sub-btn'>Submit</button>
      </div>
      <div>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Question</th>
                    <th></th>

                </tr>
            </thead>
            {questions.map((ques,index)=>{
                return(
                    <tbody key={index}>
                        <tr>
                            <td>{index+1}</td>
                            <td>{ques.Question}</td>
                            <td><button className='sub-btn' onClick={()=>{deleteHandler(ques.id)}}>Delete</button></td>
                        </tr>
                    </tbody>
                )
            })}
        </Table>
      </div>
    </div>
  )
}

export default HeatTransfer
