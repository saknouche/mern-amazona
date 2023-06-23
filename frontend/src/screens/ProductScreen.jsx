import { useParams } from 'react-router-dom';

export default function ProductScreen() {
   //récupérer le params slug
   const params = useParams();
   const { slug } = params;

   return <div><b>{slug}</b></div>;
}
