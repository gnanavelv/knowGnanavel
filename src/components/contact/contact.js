import React from 'react';
import Aux from '../../hoc/auxilary';
import {Link} from 'react-router-dom';
import Resume from '../../assets/Resume.pdf';

const Contact = React.forwardRef((props, ref) =>(
    <Aux>
                    <div ref={ref} id='contact' className="port__contact">
                <div className="port__contact-container">
                    <h2 className="heading-secondary--sub">
                            Let's build something together
                    </h2>

                    <div className="port__contact--list">
                        <div className="port__contact--item">
                            <p className="para"> Email </p>
                            <Link to='#' className="btn-pri" href="#" >
                                gnanavel.py2k@gmail.com
                            </Link>
                        </div>

                        <div className="port__contact--item">
                                <p className="para"> Resume </p>
                                <Link to={Resume} target='_blank' className="btn-pri">
                                    Download PDF
                                </Link>
    
                        </div>

                        <div className="port__contact--item">
                                    <p className="para"> Message </p>
                                    <a className="btn-pri" href="https://www.linkedin.com/in/gnanavelv27"  rel="noopener noreferrer"  target="_blank">
                                        Linkedin Profile
                                    </a>
        
                        </div>

                    </div>

                </div>

            </div>
    </Aux>
))

export default Contact;