import { ReactComponent as Logo } from './images/updated_logo_bold_white.svg';
import React, { Component } from 'react';
/*global gsap:true */

class AnimatedLogo extends Component {

    constructor(props) {
        super(props);
        // logo container
        this.logoContainer = null;
        // logo tween
        this.logoTween = null;
        this.logoStrokeTween = null;
    }

    componentDidMount() {
        let tl = gsap.timeline();

        this.logoStrokeTween =
            tl.from(this.logoContainer.querySelector('.line'), { duration: 3, x: 0, opacity: 0 })
                .from(this.logoContainer.querySelector('.dot1'), { duration: 1, y: -150, opacity: 0, ease: 'back' }, 1)
                .from(this.logoContainer.querySelector('.dot2'), { duration: 1, y: -150, opacity: 0, ease: 'back' }, 2);
        // create logo tween fade in animation
        // this.logoTween =
        //     gsap.from(this.logoContainer.querySelector('.line'), { duration: 4, x: 0, opacity: 0 });


    }



    render() {
        return (
            <div className="homepage-logo-container">
                <Logo ref={img => this.logoContainer = img} />
                {/* <img src={logo} className="logo" alt="ryijy logo" ref={img => this.logoContainer = img} /> */}
            </div>
        );
    }
}

export default AnimatedLogo;