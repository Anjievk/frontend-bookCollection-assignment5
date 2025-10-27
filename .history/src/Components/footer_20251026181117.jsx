import "./footer.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='footer'>
            <div className='footer-container'>
                <p className='copyright'>
                    © {currentYear} Tandem Blog. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
