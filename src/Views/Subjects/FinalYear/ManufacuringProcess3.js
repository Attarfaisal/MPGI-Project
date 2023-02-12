import React, { useEffect, useState } from "react";
import { baseUrl, mp3 } from "../../../Constant/Api";
import axios from "axios";
import { v4 as uuid } from "uuid";
import '../../../Assets/CSS/Subjects.css'
import { Table } from "react-bootstrap";

const ManufacuringProcess3 = () => {
  const [questions, setQuestions] = useState([]);
  const [render,setRender]  = useState(false)

  const [inputquestion, setInputquestion] = useState({
    id: uuid(),
    Question: "",
  });

  const deleteHandler=(id)=>{
    const warning = window.confirm("Do you really want to delete this Data...");

    if (warning) {
      axios.delete(`${baseUrl}/${mp3}/${id}`).then(() => {
        setRender(!render);
      });
    }
  }

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post(`${baseUrl}/${mp3}`, inputquestion).then((res) => {
      if (res.data) {
        setInputquestion({ Question: "" });
      }
      setRender(!render)
    });
  };

  useEffect(() => {
    axios.get(`${baseUrl}/${mp3}`).then((res) => {
      setQuestions(res.data);
    });
  }, [render]);

  return (
    <div>
      <div className="sub-head">
        <h1>Manufacuring Process 3</h1>
        <h3>Add Questions</h3>
        <input
          type="text"
          placeholder="Enter Important Question"
          value={inputquestion.Question}
          className="sub-input"
          onChange={(e) =>
            setInputquestion({
              ...inputquestion,
              id: uuid(),
              Question: e.target.value,
            })
          }
        />
        <br />
        <button className="sub-btn" onClick={submitHandler}>
          Submit
        </button>
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
          {questions.map((ques, index) => {
            return (
              
                <tbody key={index} >
                  <tr >
                    <td>{index + 1}</td>
                    <td>{ques.Question}</td>
                    <td>
                      <button className="sub-btn" onClick={()=>deleteHandler(ques.id)}>Delete</button>
                    </td>
                  </tr>
                </tbody>
             
            );
          })}
        </Table>
      </div>
    </div>
  );
};

export default ManufacuringProcess3;
