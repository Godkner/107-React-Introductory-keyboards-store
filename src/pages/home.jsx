import './home.css';
import {Link} from 'react-router-dom'

function Home(){
    return(
        <div className='home'>
            <h1>Welcome to Mechanical Keyboards</h1>
            <h4>The greatest Keyboards on net</h4>

            <Link className='btn btn-primary' to="/catalog">Check our amazing catalog </Link>        
        </div>
    )
}

export default Home;