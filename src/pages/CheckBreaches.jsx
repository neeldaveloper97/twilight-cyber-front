import axios from "axios";
import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const CheckBreaches = () => {
    const navigate = useNavigate()
  const { setValue, control, handleSubmit, watch } = useForm({
    defaultValues: {
      emails: [{ email: "" }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "emails",
  });

  const onSubmit = (data) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/employee/create-bulk`, data, {
        headers: { Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}` },
      })
      .then((res) => {
        if (res.data.status === 200) {
          alert("Employee Created");
          navigate('/breaches-result')
        } else {
          alert("fail to create employee");
        }
      });
  };
  const handleAddition = (e) => {
    e.preventDefault()
    append({ email: "" });
  };
  return (
    <div className="px-[150px] py-[50px] h-[calc(100vh-76px)] bg-[#f8f8f8]">
      <div className="text-center font-[500] text-[25px]">
        Enter a list of Email to check Breaches
      </div>
      <div className="shadow-xl bg-[white] p-[50px] w-1/2 m-auto my-[20px] rounded-[10px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="max-h-[calc(60vh-76px)] overflow-auto">
            {fields.map((field, index) => (
              <div className="pb-[20px]">
                <label
                  for="email"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Employee Email
                </label>
                <div class="relative flex gap-[10px] items-center mt-2 rounded-md">
                  <input
                    key={field.id}
                    type="email"
                    name="email"
                    value={watch(`emails.${index}.email`)}
                    onChange={(e) => {
                      setValue(`emails.${index}.email`, e.target.value);
                    }}
                    class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    placeholder="Enter Employee Email "
                  />
                  {fields.length > 1 && (
                    <div>
                      <button
                        onClick={() => remove(index)}
                        className="bg-red-500 text-white font-[500] py-[5px] px-[20px] rounded-[8px]"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="py-[20px] flex gap-[20px] items-center">
            <button
              onClick={(e)=>(handleAddition(e))}
              className="bg-green-700 text-white font-[500] py-[5px] px-[20px] rounded-[8px]"
            >
              Add new email
            </button>
            <input
              type="submit"
              className="bg-violet-500 text-white font-[500] py-[5px] px-[20px] rounded-[8px]"
              title="Check Breaches"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckBreaches;
