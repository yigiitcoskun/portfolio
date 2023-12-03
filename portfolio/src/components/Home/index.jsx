import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss"; 
import AnimatedLetters from "../AnimatedLetters";
import Loader from "react-loaders";

const Home = () => {
    const [letterClass, setLetterClass] = useState("text-animate");
    const nameArray = [" ","M", "u","s","t","a","f","a"];

    
    
    
    return(
        <>
        <div className="container home-page">
            
            <div className="text-zone">
            <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
                <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
            </h1>
                <h2>Computer Programming Student</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>

        </div>
        <Loader type="line-scale-pulse-out" />
        </>
    )
}

export default Home;