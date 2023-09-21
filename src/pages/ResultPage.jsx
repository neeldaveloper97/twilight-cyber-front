import React, { useEffect, useState} from "react";
import axios from "axios";
import ViewAction from "./ViewAction";
import { useNavigate } from "react-router-dom";

const ResultPage = () => {
  

  const bgColor = (total) => {
    if (total === 0) return "bg-[white]";
    if (total <= 500) return "bg-green-600";
    if (total <= 1000) return "bg-[lightyellow]";
    if (total <= 2000) return "bg-[yellow]";
    if (total < 5000) return "bg-[orange]";
    if (total >= 5000) return "bg-red-500";
  };
  const [employee, setEmployee] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    const handleEntries = () => {
      axios
        .get(`${process.env.REACT_APP_API_URL}/api/employee/get-all`, {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
          },
        })
        .then((response) => {
          setEmployee(response.data.data);
        })
        .catch((error) => {
          alert(error.message);
        });
    };
    handleEntries();
  }, []);

  const handleAction = (data)=>{
    console.log(data);

    return (<ViewAction data={data}/>)
     
  }
  return (
    <div className="px-[150px] py-[50px] h-[calc(100vh-76px)] bg-[#f8f8f8]">
      <div className="text-center font-[500] text-[25px]">Breaches Result</div>
      <table className="table-auto border-collapse w-3/4 m-auto mt-[30px]">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employee.length > 0 &&
            employee?.map((item) => (
              <tr className={bgColor(item.total)}>
                <td>{item._id}</td>
                <td>{item.email}</td>
                <td>{item.total}</td>
                <td className="!bg-[white]">{
                    <button className="bg-violet-500 text-white font-[500] py-[5px] px-[20px] rounded-[8px]" onClick={()=>navigate(`/view-action/${item._id}`)}>View</button>               
                }</td>
                
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultPage;
