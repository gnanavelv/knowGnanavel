import React from 'react';
import Aux from '../../hoc/auxilary';
import Realtor from '../../assets/img/realtors.png';
import Wordpress from '../../assets/img/wordpress.png';
import odm from '../../assets/img/odm.png'
const Projects = React.forwardRef((props, ref)=>(
    <Aux>
        <div ref={ref} className="port__projects" id="project">
                <div className="port__projects--container">
                    <div className="port__projects--list">
                        <div className="port__projects--item">
                            <div className="port__projects--item-wrap">
                                <div className="port__projects--item-heroImg">
                                    <div className="port__projects--item-heroImg-wrap">
                                        <img src={Realtor}className="port__projects--item-img" alt="Django" />
                                    </div>
                                    
                                </div>

                                <div className="port__projects--item-desc">
                                    <div className="port__projects--item-desc__wrap">
                                        <h3 className="heading__tertiary heading__tertiary--main">
                                            Nexter - Realtor Site
                                        </h3>

                                        <h3 className="heading__tertiary heading__tertiary--sub">
                                            Django / UI / Postgres
                                        </h3>

                                        <p className="para mg-md">
                                               Nexter is an realtor site build on Django framework with modern UI design for realtor sites. 
                                               Nexter allows user to register, login and saves users inquiry. 
                                               Users can make inquiry from the site about the property with realtors. Nexter has modern search form 
                                               uses Postgres DB to result the requests.
                                                The source code is for Nexter 
                                                is available <a className="btn-pri" href="https://github.com/gnanu27/nexter" rel="noopener noreferrer" target="_blank"> here </a>

                                        </p>

                                        <a href="http://ec2-18-222-181-210.us-east-2.compute.amazonaws.com/" rel="noopener noreferrer" target="_blank" className="btn btn--green">View Project </a>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="port__projects--item">
                                <div className="port__projects--item-wrap">
                                   
    
                                    <div className="port__projects--item-desc">
                                        <div className="port__projects--item-desc__wrap">
                                            <h3 className="heading__tertiary heading__tertiary--main">
                                            Hugo - Wordpress Theme
                                            </h3>
    
                                            <h3 className="heading__tertiary heading__tertiary--sub">
                                            Wordpress / Html-css / JS
                                            </h3>
    
                                            <p className="para">
                                            Hugo is an custom wordpress theme for an Creative design agency or an Startup.
                                            Hugo is an single page theme comes with stunning responsive header and modules tailored for it. Create 2/3/4/5 Column Portfolios and galleries. 
                                            Source code for Hugo
                                             is available <a className="btn-pri" href="https://github.com/gnanu27/Hugo" rel="noopener noreferrer" target="_blank"> here </a> 
                                            </p>
    
                                            <a href='https://cdahugo.000webhostapp.com/' rel="noopener noreferrer" target="_blank"  className="btn btn--green"> View Project </a>
    
                                        </div>
    
                                    </div>

                                    <div className="port__projects--item-heroImg">
                                            <div className="port__projects--item-heroImg-wrap">
                                                <img src={Wordpress} className="port__projects--item-img" alt="Django" />
                                            </div>
                                        </div>
    
                                </div>
    
                            </div>


                            <div className="port__projects--item">
                                    <div className="port__projects--item-wrap">
                                        <div className="port__projects--item-heroImg">
                                                <div className="port__projects--item-heroImg-wrap">
                                                    <img src={odm} className="port__projects--item-img" alt="Django" />
                                                </div>
                                        </div>
        
                                        <div className="port__projects--item-desc">
                                            <div className="port__projects--item-desc__wrap">
                                                <h3 className="heading__tertiary heading__tertiary--main">
                                                    ODM - Object Detection Model
                                                </h3>
        
                                                <h3 className="heading__tertiary heading__tertiary--sub">
                                                    Tensorflow / Keras / Flask / AWS
                                                </h3>
        
                                                <p className="para">
                                                       Object detection Model is a deep learning model which an detect objects in a image. ODM uses keras and tensorflow as library and deployed on AWS. Source code for
                                                        ODM is available <a className="btn-pri" href="https://github.com/gnanu27/ObjectDetection" rel="noopener noreferrer" target="_blank"> here </a>
                                                </p>
        
                                                <a href="http://ec2-18-190-9-0.us-east-2.compute.amazonaws.com" rel="noopener noreferrer" target="_blank" className="btn btn--green"> View Project </a>
        
                                            </div>
        
                                        </div>
        
                                    </div>
        
                                </div>
                            <div className="port__projects--item">
                            <div className="port__projects--item-wrap">
                                <p className='para center'>Ofcourse there is more, my coding work can be seen on my <span> <a className="btn-pri" href="https://github.com/Gnanu27" rel="noopener noreferrer" target="_blank">Github</a> </span></p>
                            </div>
                            </div>

                    </div>

                </div>

                <hr className="hr-md" />

            </div>
    </Aux>

))
export default Projects;
