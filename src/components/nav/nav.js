import React, {Component} from 'react';
import Aux from '../../hoc/auxilary';
import {Link} from 'react-router-dom';
import Resume from '../../assets/Resume.pdf'

class Navbar extends Component{
    

handleScroll = (elRef) => {

        const el = elRef.current ? elRef.current : elRef
 
        el.scrollIntoView({

          behavior: 'smooth',
          block: 'start'
          
        })
      }

        
    

    render(){
        const {aboutRef, portfolioRef, contactRef} = this.props.innerRef;
    return(
    <Aux>
        <nav className="port__header--nav">
                        <div className="port__header--nav-logo">
                            Gnanavel
                        </div>

                        <input type="checkbox" id='port__header--nav-burger' className="port__header--nav-burger"  />
                        <label for="port__header--nav-burger" className="port__header--nav-burgerMenu">
                            <div class="port__header--nav-burgerMenu-item">

                            </div>
                        </label>

                        <ul class="port__header--nav-list">
                            <li class="port__header--nav-item"> 
                                <Link to="#portfolio" onClick={() => this.handleScroll(portfolioRef)} className="port__header--nav-link"> Portfolio </Link>
                                
                            </li>
                            <li class="port__header--nav-item"> 
                                <Link to="#about" onClick={() => this.handleScroll(aboutRef)} className="port__header--nav-link"> About </Link>
                                
                            </li>

                            <li class="port__header--nav-item"> 
                                <Link href="#contact" onClick={() =>this.handleScroll(contactRef)} className="port__header--nav-link"> Contact </Link>
                                
                            </li>

                            <li class="port__header--nav-item">
                                <Link to={Resume} target='_blank' className="port__header--nav-link"> Resume </Link> 
                            </li>
                        </ul>

        </nav>
    </Aux>
)}
}
export default React.forwardRef( (props,ref)=> <Navbar innerRef={ref} /> );