import "./about.css"
import { useState } from 'react';

function About(){

    const [visible, setVisible] = useState(false);
    const [phone,setPhone]= useState(false);

    function toggleEmail(){
        setVisible(!visible);
    }

    function validateCode(e){
        const text= e.target.value;
        if(text.toLowerCase() === "nice"){
            setPhone(true);
        }else{
            setPhone(false);
        }
    

    }

    function getEmail(){
        return visible ? "kfierro@uabc.edu.mx" : "";
    }
    function getNumber(){
        return phone ? '6646510450' : '';
    }


    return(
        <div className="about">
            <h1>About me</h1>
            <h3>Kevin Fierro</h3>
            <h4>{getEmail()}</h4>
            <button className="btn btn-outline-dark" onClick={toggleEmail}>Show email</button>

            <hr />
            <p>Type the code to see my phone number</p>
            <input onChange={validateCode} placeholder="code" />
            <h6 className="mt-3">{getNumber()}</h6>
        </div>
    );
}

export default About;