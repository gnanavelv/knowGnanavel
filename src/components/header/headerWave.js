import React from 'react';
import Aux from '../../hoc/auxilary';

const HeaderWave = ()=>(
    <Aux>
                        <div className="port__header--wave">
                    <div className="port__header--wave-container">
                            <div style={{height: '100px', overflow: 'hidden'}} ><svg viewBox="0 0 500 150" preserveAspectRatio="none" className="port__header--wave-svg port__header--wave-svg-light"><path d="M-2.04,50.48 C150.00,149.60 348.97,-82.38 501.35,50.48 L500.00,149.60 L-0.00,149.60 Z"
                                style={{stroke: 'none', fill: 'rgba(137, 252, 166, 0.658)'}}></path></svg></div>
        
                            <div  style={{height: '100px', overflow: 'hidden'}} ><svg viewBox="0 0 500 150" preserveAspectRatio="none" className="port__header--wave-svg port__header--wave-svg-dark"><path d="M-2.60,83.94 C122.68,-102.08 345.03,231.58 500.78,59.34 L500.00,149.60 L-0.00,149.60 Z" 
                                style={{ stroke: 'none', fill: 'rgba(168, 252, 153, 0.616)'}}></path></svg></div>

                    </div>
                        
                </div>
    </Aux>
)

export default HeaderWave;