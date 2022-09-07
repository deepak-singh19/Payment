import React, {useState} from "react";
import axios from "axios";



export default function StudentEditProfile() {
    const [user, setUser]=useState({
        firstName:"",
        lastName:"",
        collegeName:"",
        yop:"",
        stream:"",
        tech:"",
        github:"",
        streetAddress:"",
        city:"",
        state:"",
        postalCode:""



    });

    let name, value;
    const handleInputs=(e)=>{
        console.log(e);
        name=e.target.name;
        value=e.target.value;


        setUser({...user, [name]:value} );
    }

    const postData= (e)=>{
      e.preventDefault();

      const{firstName, lastName, collegeName, yop, stream, tech, github, streetAddress, city, state, postalCode, linkedin}= user;

      axios.post("http://localhost:3000/studentEdit",{firstName, lastName, collegeName, yop, stream, tech, github, streetAddress, city, state, postalCode, linkedin}).then(res=>{
        console.log(res.data);
      })

    // const data= await res.json();

    

    }
  
  
    return (
    <div>
      
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Personal Information
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Use a permanent address where you can receive mail.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={user.firstName}
                        onChange={handleInputs}
                        autoComplete="firstName"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={user.lastName}
                        onChange={handleInputs}
                        id="lastName"
                        autoComplete="lastName"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                 
                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="collegeName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        College Name{" "}
                      </label>
                      <input
                        type="text"
                        name="collegeName"
                        value={user.collegeName}
                        onChange={handleInputs}
                        id="collegeName"
                        autoComplete="collegeName"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="yop"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Year of Passing
                      </label>
                      <input
                        type="string"
                        name="yop"
                        value={user.yop}
                        onChange={handleInputs}
                        id="yop"
                        autoComplete="Year of Passing"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="stream"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Stream
                      </label>
                      <input
                        type="text"
                        name="stream"
                        value={user.stream}
                        onChange={handleInputs}
                        id="stream"
                        autoComplete="stream"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="tech"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Tech/Intrested In{" "}
                      </label>
                      <input
                        type="text"
                        name="tech"
                        value={user.tech}
                        onChange={handleInputs}
                        id="tech"
                        autoComplete="tech"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="linkedin"
                        className="block text-sm font-medium text-gray-700"
                      >
                        LinkedIn{" "}
                      </label>
                      <input
                        type="url"
                        name="linkedin"
                        value={user.linkedin}
                        onChange={handleInputs}
                        id="linkedin"
                        autoComplete="linkedin"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="github"
                        className="block text-sm font-medium text-gray-700"
                      >
                        GitHub{" "}
                      </label>
                      <input
                        type="url"
                        name="github"
                        value={user.github}
                        onChange={handleInputs}
                        id="github"
                        
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

              
                   


                    <div className="col-span-6">
                      <label
                        htmlFor="streetAddress"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Street address
                      </label>
                      <input
                        type="text"
                        name="streetAddress"
                        value={user.StreetAddress}
                        onChange={handleInputs}
                        id="streetAddress"
                        autoComplete="streetAddress"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={user.city}
                        onChange={handleInputs}
                        id="city"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="state"
                        className="block text-sm font-medium text-gray-700"
                      >
                        State / Province
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={user.state}
                        onChange={handleInputs}
                        id="state"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="postalCode"
                        className="block text-sm font-medium text-gray-700"
                      >
                        ZIP / Postal
                      </label>
                      <input
                        type="text"
                        name="postalCode"
                        value={user.postalCode}
                        onChange={handleInputs}
                        id="postalCode"
                        autoComplete="postalCode"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    name="register"
                    value="register"
                    onClick={postData}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

    
      
    </div>
  );
}
