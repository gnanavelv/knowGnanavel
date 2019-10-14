import React from 'react';
import Aux from '../../hoc/auxilary';
import iconCore from '../../assets/img/sprite/core.svg'
import iconBar from '../../assets/img/sprite/bars.svg';
import iconFrame from '../../assets/img/sprite/web.svg';
import iconColor from '../../assets/img/sprite/colors.svg'

const About =React.forwardRef((props, ref) =>(
    <Aux>
            <div ref={ref} className="port__about" id="about">
                <div className="port__about--container">
                    <div className="port__about--hero">
                        <h2 className="heading-secondary heading-secondary--sub">
                            Hi I Am Gnanavel!
                        </h2>

                        <p className="heading__tertiary heading__tertiary--sub"> 
                        Football / Cricket enthusiastic <span role='img' aria-label=''>⚽</span>| Lifelong explorer <span role='img' aria-label=''>🤹</span> | Curious Learner <span role='img' aria-label=''>🧘‍</span> </p>
                        <hr className="hr" />
                        <h3 className="para mg-bt">
                            I am Full Stack developer obsessed with solving problems through my programming skills and big fan of open source community. Besides having
                            super awesome Mutton-cooking & coding skills, I follow popular web development trends,
                             I'm proficient in different repository tools and in my free time I play around with machine learning models and 
                             neural network.  My coding work can be seen on my <span> <a className="btn-pri" href="https://github.com/Gnanu27" rel="noopener noreferrer" target="_blank">Github</a> </span> . Of course there is more: 
                        </h3>
                    </div>

                    <div className="port__about--toolbox">
                        <div className="port__about--toolbox-wrap">
                            <div className="port__about--toolbox-hero">
                                <h2 className="heading-secondary heading__tertiary--main mg-bt">
                                    My Toolbox
                                </h2>
                                <hr className="hr" />
                            </div>

                                <div className="port__about--toolbox-gridWrap">
                                    <div className="port__about--toolbox-grid">
                                        <div className="port__about--toolbox-grid__item">
                                            <div className="port__about--toolbox-grid__desc">
                                                <div className="port__about--toolbox-grid__desc-img">
                                                        <svg  className="port__about--toolbox-grid__desc-svg">
                                                                <use xlinkHref={`${iconCore}#Capa_1`}></use>
                                                        </svg>
                                                </div>

                                                <div className="port__about--toolbox-grid__desc-hero">
                                                    <h2 className="heading-secondary heading-secondary--sec">
                                                        Core Language
                                                    </h2>

                                                    <p className="para">
                                                        Being formally trained developer, I am quiet decent with <span> Python, 
                                                        C, C++,Java </span> and <span>Go </span> languages
                                                    </p>

                                                </div>

                                            </div>
                                        </div>

                                        <div className="port__about--toolbox-grid__item">
                                                <div className="port__about--toolbox-grid__desc">
                                                    <div className="port__about--toolbox-grid__desc-img">
                                                            <svg className="port__about--toolbox-grid__desc-svg">
                                                                    <use xlinkHref={`${iconFrame}#Capa_1`}></use>
                                                            </svg>
                                                    </div>

                                                    <div className="port__about--toolbox-grid__desc-hero">
                                                        <h2 className="heading-secondary heading-secondary--sec">
                                                           Web Technology
                                                        </h2>
    
                                                        <p className="para">
                                                            Using Javascript frameworks such as <span> ReactJS, AngularJs </span>and <span> redux </span>I can implement 
                                                            client server side features. Also have experience in <span> wordpress </span> theme development and 
                                                            knowledge in <span> NodeJs </span> and <span> ExpressJs </span>.
                                                        </p>
    
                                                    </div>
    
                                                </div>
                                        </div>

                                        <div className="port__about--toolbox-grid__item">
                                                <div className="port__about--toolbox-grid__desc">
                                                    <div className="port__about--toolbox-grid__desc-img">
                                                            <svg className="port__about--toolbox-grid__desc-svg">
                                                                    <use xlinkHref={`${iconBar}#Capa_1`} ></use>
                                                            </svg>
                                                    </div>
    
                                                    <div className="port__about--toolbox-grid__desc-hero">
                                                        <h2 className="heading-secondary heading-secondary--sec">
                                                            Framework
                                                        </h2>
    
                                                        <p className="para">
                                                            I have experience in working with <span> Django </span> and <span> Flask </span>web framework, also have decent experience in working with 
                                                            <span> modern javascript frameworks </span>.
                                                            I have worked with ML Frameworks such as <span> Tensorflow </span> and <span> Keras </span>.
                                                        </p>
    
                                                    </div>
    
                                                </div>
                                        </div>

                                        <div className="port__about--toolbox-grid__item">
                                                <div className="port__about--toolbox-grid__desc">
                                                    <div className="port__about--toolbox-grid__desc-img">
                                                            <svg className="port__about--toolbox-grid__desc-svg">
                                                                    <use xlinkHref={`${iconColor}#Capa_1`}></use>
                                                            </svg>

                                                            {/* <!-- <svg className="port__about--toolbox-grid__desc-svg">
                                                                    <use xlink:href="img/colors.svg#Capa_1" ></use>
                                                            </svg> --> */}
                                                    </div>


                                                    
    
                                                    <div className="port__about--toolbox-grid__desc-hero">
                                                        <h2 className="heading-secondary heading-secondary--sec">
                                                            Advanced Skill
                                                        </h2>
    
                                                        <p className="para">
                                                            I have worked with <span>  Redis, MongoDB, PostgreSQL, SQLite,
                                                            AWS, Firebase, Postman </span> & <span> Machine Learning </span>.
                                                        </p>
    
                                                    </div>
    
                                                </div>
                                        </div>

                                    </div>

                                </div>

                
                        </div>

                    </div>

                </div>
                <hr className="hr-md" />

            </div>
    </Aux>
))

export default About;