import "./feature.css";

export default function Feature(){ 

    return(
        <div className="mpage">
            <div className="mtitle">
                <div className="mquote">
                    <div> Don't worry about <span className="cquote">"Preparation"</span> </div>
                    <div> Come Join us for <span className="cquote">"Repetition"</span></div>
               </div>
                <div className="helpquote">
                    <div>Talk to the people</div>
                    <div>who believe in helping others</div>
                </div>
                <div className="BUTTON">
                    <button>Sign-in</button>
                    <button>Free Resourse</button>
                </div>
            </div>
            <div className="mimage">
                <img className="wpimg" src={require("./img/wp8-removebg-preview.png")} alt="Loading" />
            </div>
        </div>

    );
}

