import './home.css';
import {Link} from 'react-router-dom'

function Home(){
    return(
        <div className='home'>
            <h1>Welcome </h1>
            <h2>to Mechanical Keyboards</h2>
            <h4>The greatest Keyboards on net</h4>
            <img className='logo' src="/images/logo.png" alt="" />
            <section className="hero-section">

            <div className='card-container'>
                <div className="cards">
                    <div className="card-background" style={{ 
                        backgroundImage:"url(/images/card1f.webp)"}}></div>
                    <div className="content">
                        <div className="card-category">Keyboards</div>
                        <h3>The best quality</h3>
                    </div>
                </div>
                <div className="cards">
                    <div className="card-background" style={{ 
                        backgroundImage: "url(/images/card2f.jpg)"}}></div>
                    <div className="content">
                        <div className="card-category">Switches</div>
                        <h3>A sound you like</h3>
                    </div>
                </div>
                <div className="cards">
                    <div className="card-background" style={{ 
                        backgroundImage:"url(/images/card3f.jpg)"}}></div>
                    <div className="content">
                        <div className="card-category">Keycaps</div>
                        <h3>Last longer</h3>
                    </div>
                </div>

            </div>
                        </section>
            <Link className='btn btn-secondary button' to="/catalog">Check our amazing catalog </Link>        
        </div>
       
    )
}

export default Home;