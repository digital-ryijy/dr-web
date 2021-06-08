import logo from './images/updated_logo_bold_white.svg';
import React, { Component } from 'react';
/*global gsap:true */
class AnimatedLogo extends Component {

    constructor(props) {

        super(props);

        // logo container

        this.logoContainer = null;

        // logo tween

        this.logoTween = null;

    }



    componentDidMount() {

        // create logo tween

        this.logoTween =

            gsap.from(this.logoContainer, { duration: 3, x: '-100vw', opacity: 0 });


    }



    render() {

        return (

            <div className="homepage-logo-container">

                <img src={logo} className="logo" alt="ryijy logo" ref={img => this.logoContainer = img} />



            </div>

        );

    }

}



export default AnimatedLogo;