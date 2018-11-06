import React from 'react';
import Loader from 'react-loader-spinner';
import {TweenMax} from "gsap/TweenMax";

class Loading extends React.Component {

    componentDidMount(callback) {
        const el = document.querySelector(".loader");
        TweenMax.fromTo(el, 0.3, {y: 300, opacity: 0}, {y: 0, opacity: 1, onComplete: callback});
    }

    componentWillUnmount(callback) {
        const el = document.querySelector(".loader");
        TweenMax.fromTo(el, 0.3, {y: 500, opacity: 1}, {y: -100, opacity: 0, onComplete: callback});
    }
    
    render(){
    
        return(
            <div className="loader">
                <Loader 
                    type="Triangle"
                    color="yellow"
                    height="100"	
                    width="100"
                />   
            </div>
        ); 
    }

}

export default Loading;
