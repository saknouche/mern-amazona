// import data from '../data';
import axios from 'axios';
import { useEffect, useReducer } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product.jsx';
// import logger from 'use-reducer-logger';
//Utiliser useReducer pour traiter des states complexes
const reducer = (state, action) => {
   switch (action.type) {
      case 'FETCH_REQUEST':
         return { ...state, loading: true };
      case 'FETCH_SUCCESS':
         // les datas du backend sont contenues dans action.payload
         return { ...state, products: action.payload, loading: false };
      case 'FETCH_FAIL':
         return { ...state, loading: false, error: action.payload };
      default:
         return state;
   }
};
function HomeScreen() {
   // dispatch pour updater le state
   const [{ loading, error, products }, dispatch] = useReducer(
      // process.env.NODE_ENV === 'development' ? logger(reducer) : reducer,
      reducer,
      {
         products: [],
         loading: true,
         error: '',
      }
   );
   // const [products, setProducts] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         dispatch({ type: 'FETCH_REQUEST' });
         try {
            const result = await axios.get('/api/products');
            dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
         } catch (error) {
            dispatch({ type: 'FETCH_FAIL', payload: error.message });
         }
      };
      fetchData();
   }, []);

   return (
      <div>
         <h1>Featured products</h1>
         <div className='products'>
            {loading ? (
               <div>Loading ...</div>
            ) : error ? (
               <div>{error}</div>
            ) : (
               <Row>
                  {products.map((product) => (
                     <Col key={product.slug} sm={6} md={4} lg={3} className='mb-3'>
                        <Product product={product}/>
                     </Col>
                  ))}
               </Row>
            )}
         </div>
      </div>
   );
}

export default HomeScreen;
