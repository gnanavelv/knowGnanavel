import React, {Component} from 'react';
import Aux from '../../hoc/auxilary';
import Navbar from '../nav/nav';
import HeaderHero from './header_hero';
import HeaderWave from './headerWave';
class Header extends Component {
  

    render(){
   
    return (

    <Aux>
        <div className="port__header">
            <div className="port__header--container">
                <Navbar ref={this.props.innerRef} />
                <HeaderHero />
            </div>

            <HeaderWave />
        </div>
    </Aux>
)

}

}

export default React.forwardRef( (props, ref)=> < Header innerRef={ref}  />);