import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import Rating from './Rating.jsx';

const Product = ({ product }) => {
   return (
      <Card className='product'>
         {/* Remplacer a par Link pour éviter les chargements des pages, en single page */}
         <Link to={`/product/${product.slug}`}>
            <img
               src={product.image}
               alt={product.name}
               className='card-img-top'
            />
         </Link>
         <Card.Body>
            <Link to={`/product/${product.slug}`}>
               <Card.Title>{product.name}</Card.Title>
            </Link>
            {/* Rating component */}
            <Rating rating={product.rating} numReviews={product.numReviews}/>
            <Card.Text>${product.price}</Card.Text>
            <Button>Add to cart</Button>
         </Card.Body>
      </Card>
   );
};

export default Product;
