import { useEffect } from 'react';
import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';
import './styles.css';

function Orders(){

    useEffect (() => {

        console.log('componente orders iniciou')

    }, []);
    

    return(
        <div className="orders-container">
            <StepsHeader />
            <ProductsList />
        </div>
        
    )

    
}

export default Orders;