import React from 'react';
import Aux from '../../hoc/auxilary';
import Dev from '../../assets/img/dev.svg'

const HeaderHero = () =>(
    <Aux>
                            <div className="port__header--hero">
                        <div className="port__header--hero-container">
                            <div className="port__header--hero-intro">
                                <h3 className=" heading__primary heading__primary--main">
                                    Hi! I'm Gnanavel <span role='img' aria-label=''>👋</span>  ,
                                </h3>

                                <h2 className="heading-secondary heading-secondary--main">
                                  I'm  a <span> Full Stack Developer </span> passionate about machine learning and web development.
                                </h2>
                            </div>

                            <div className="port__header--hero-desc">
                                <img src={Dev} className="port__header--hero-svg" alt="dev" />
                            </div>

                        </div>

                    </div>
    </Aux>
)

export default HeaderHero;