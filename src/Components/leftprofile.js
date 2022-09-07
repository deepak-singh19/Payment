import "../main.css"

export default  function LeftProfile(){

    return(
        <div className="stu-details">

            <div className="stu-img mt-4">
              <img
                className="stu-picture h-28 w-28"
                src={require("../img/stu3-modified.png")}
                alt="Loading"
              ></img>
              <button>Edit Profile</button>
            </div>

            <div className="stu-information font-semibold mt-8">

              <div className="mt-2">
                <p>Jyoti Singh</p>
              </div>
  
              <div className="mt-2">
                <p>BML Munjal University</p>
              </div>
  
              <div className="mt-2">
                <p>B.Tech (CSc)</p>
              </div>

              <div className="mt-2">
                <p>4th Year</p>
              </div>

              <div className="mt-2">
                <p>HTML, CSS, JavaScript</p>
              </div>

              <div className="mt-2">
                <p>LinkedIn</p>
              </div>

            </div>

          </div>
    );

}