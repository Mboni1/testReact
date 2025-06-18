import logo from '../assets/logo.png'


function Card() {
    return(
        <div className="card">
            <img className='card-image' src={logo} alt="logo.png"></img>
            <h2 className='card-title'>Football</h2>
            <p className='card-text'>I want to know the transfers news</p>
            <button className="button">click me</button>
    
        </div>
    
    );
}
export default Card