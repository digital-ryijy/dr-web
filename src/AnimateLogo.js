import logo from './images/updated_logo_bold_white.svg';


{/* <img src={logo} className="logo" alt="ryijy logo" /> */ }

function AnimatedLogo() {
    return (
        <div className="homepage-logo-container">
            <img src={logo} className="logo" alt="ryijy logo" />
        </div>
    );
}

export default AnimatedLogo;