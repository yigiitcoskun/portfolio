import "./index.scss"
import AnimatedLetters from "../AnimatedLetters"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faReact, faPython, faHtml5, faCss3} from "@fortawesome/free-brands-svg-icons"
import Loader from 'react-loaders'

const About = () => {
    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
                <div className="par">
                    <h1>
                        <AnimatedLetters
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1> 
                    <p>
                    &emsp;&emsp;Motivated computer programming student with
                        a strong interest in backend development,
                        proficient in multiple programming languages
                        such as Python, JavaScript. Skilled in 
                        front-end web development using React, 
                        HTML and Bootstrap. Quick learner with 
                        problem-solving skills and a passion for 
                        innovation. Seeking an intern position to 
                        contribute to the development of innovative 
                        software solutions and gain practical experience.
                    </p>
                </div>
                <div className="skills">
                    <div className="face1">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faPython} color="#FFD43B" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type="line-scale-pulse-out" />
        </>
    )
}

export default About;