import './styles.css';
import { ReactComponent as Mainimage } from './main.svg'
import Footer from '../Footer';
import { Link } from 'react-router-dom';





function Home() {

    return (
        <>
                <div className="home-container">
                    <div className="home-content">
                        <div className="home-actions">
                            <div className="home-tiltle">

                                <h1>
                                    Faça seu pedido <br /> que entregamos <br /> pra você!!!
                    </h1>

                                <h3 className="home-subtitle">

                                    Escolha o seu pedido e em poucos minutos <br />
                    levaremoss na sua porta

                    </h3>

                    <Link to = "/orders" className="home-btn-order">

                        FAZER PEDIDO

                    </Link>


                            </div>
                        </div>
                        <div className="home-image">
                            <Mainimage />
                        </div>
                    </div>
                </div>
            <Footer  />
        </>

    )
}

export default Home;