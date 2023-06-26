import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen.jsx';
import ProductScreen from './screens/ProductScreen.jsx';
import { Navbar, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
   return (
      <Router>
         <div className='d-flex flex-column site-container'>
            <header>
               <Navbar bg='dark' variant='dark'>
                  <Container>
                     <LinkContainer to='/'>
                        <Navbar.Brand>Amazona</Navbar.Brand>
                     </LinkContainer>
                  </Container>
               </Navbar>
               {/* <Link to='/'>Amazona</Link> */}
            </header>
            <main>
               <Container>
                  <Routes>
                     <Route path='/' element={<HomeScreen />} />
                     <Route path='/product/:slug' element={<ProductScreen />} />
                  </Routes>
               </Container>
            </main>
            <footer>
               <div className='text-center'>All rights reserved</div>
            </footer>
         </div> 
      </Router>
   );
}

export default App;
