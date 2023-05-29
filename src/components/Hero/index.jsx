import Navbar from '../Navbar/index';
import './Hero.css';

function Hero() {
    return (
        <div className="heroImage">
            <div className="topGradient"></div>
            <Navbar />        
            <div className="bottomGradient"></div>    
        </div>
    )
}

export default Hero;