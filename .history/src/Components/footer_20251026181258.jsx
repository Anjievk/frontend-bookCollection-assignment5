import "./footer.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='footer'>
            <div className='footer-container'>
                <p className='copyright'>© Angie , Set G, {currentYear}</p>
            </div>
        </footer>
    );
};

export default Footer;
