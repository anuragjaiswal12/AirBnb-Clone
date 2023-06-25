import logo from './../assets/airbnb-logo.png';

export default function Navbar() {
    return (
        <>
            <nav>
                <div className='navbar'>
                    <img src={logo} alt='airbnb logo' className='navbar-logo' />
                </div>
            </nav>
        </>
    );
}