import logo from '../logo.png';

const Header = () => {
    return (
        <div>
            <header>
            <img src={logo} className="App-logo" alt="logo" />
            <hr className="Horizontal-Line" />
            <p className="Title-Header"> Leave a feedback! </p>
            </header>
        </div>
    )
}

export default Header;
