import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ViewAction = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleEntries = () => {
      setIsLoading(true)
      axios
        .get(
          `${process.env.REACT_APP_API_URL}/api/employee/get-entries-by-id/${id}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
            },
          }
        )
        .then((response) => {
          console.log(response);
          setData(response?.data?.data);
          setIsLoading(false)
        })
        .catch((error) => {
          alert(error?.message);
          setIsLoading(false)
        });
    };
    handleEntries();
  }, []);
  console.log(data?.breaches);

  return (
    <>
      {!loading &&
        <div className="px-[150px]">
          <h1 className="flex mt-[20px] justify-center text-3xl font-bold text-[black]">{`Breaches for this ${data.email} are`}</h1>
          <div className="flex w-full gap-[20px] flex-wrap m-auto pt-[50px]">
            {data?.result && data?.result.length > 0 ? Object.entries(data?.breaches)?.map((key) => (
              <div className="flex w-[calc(50%-10px)] bg-[#f8f8f8f8] shadow-lg justify-between items-center px-[100px] py-[30px]">
                <h3 className="text-[20px] font-semibold text-gray-600">{key[0]}</h3>
                {/* - */}
                <p className="flex justify-center items-center rounded-[25px] h-[50px] w-[50px] bg-[red] text-white text-bold p-[10px]">{key[1]}</p>
              </div>
            ))
              : <div className="flex justify-center w-full"><p className="text-center mt-[20px] text-3xl font-bold text-[black]">No Breaches Found for this email</p></div>}
          </div>
        </div>
        }
    </>
  );
};

export default ViewAction;
