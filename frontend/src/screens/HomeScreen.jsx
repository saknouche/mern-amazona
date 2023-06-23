import { Link } from 'react-router-dom';
import data from '../data';

function HomeScreen() {
   return (
      <div>
         <h1>Featured products</h1>
         <div className='products'>
            {data.products.map((product) => (
               <div className='product' key={product.slug}>
                  {/* Remplacer a par Link pour éviter les chargements des pages, en single page */}
                  <Link to={`/product/${product.slug}`}>
                     <img src={product.image} alt={product.name} />
                  </Link>
                  <div className='product-info'>
                     <Link to={`/product/${product.slug}`}>
                        <p>{product.name}</p>
                     </Link>
                     <p>
                        <strong>${product.price}</strong>
                     </p>
                     <button>Add to cart</button>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}

export default HomeScreen;