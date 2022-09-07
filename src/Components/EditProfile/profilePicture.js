import React from "react";
import {useState} from "react";
 export default function ProfilePic(){

    const {pic, setPic}= useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png");
    
    return(
        <div>
            <div className="conatiner">

                <h1>Profile Img</h1>

                <div className="img-holder">
                    <img src={pic} alt="" id="img" className="img" />
                    
                </div>

            </div>
        </div>
    );

}