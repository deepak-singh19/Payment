import "../main.css";
import LeftProfile from "./leftprofile";
import StudentChart from "./studentChart";
import Search from "./search";
import ReactSearchBox from "react-search-box"; 


export default function User(){

    return(
        <div className=" md:flex md:flex-row flex flex-col w-screen h-screen">

            <LeftProfile/>

            {/* USER PAGE */}

            <div className="user flex flex-col ">

                <div className="lg:flex lg:flex-row lg:justify-between lg:w-full  flex-wrap flex flex-col  self-center  ">

                    <div className="userInfo flex flex-col justify-around lg:ml-8 lg:self-stretch    self-center m-4 p-4">

                        <p>Total Booked Session:  {5}</p>
                        <p>Total Attended Session: {4}</p>
                        <p>Total Hour of Session: {6} Hrs</p>
                        <p>Previous Session Date: {8399}</p>
                        <p>Upcoming Session Date: {689}</p>

                    </div>
                    <div className="lg:mr-8 self-center ">
                        <StudentChart/>
                    </div>

                </div>

                <div className="  mt-10 mx-auto ">
                    <Search/>

                </div>


            </div>
           

        </div>
    );
}