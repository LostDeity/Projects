import React, { Suspense } from 'react';
import { BrowserRouter as Router, 
  Route, 
  Redirect, 
  Switch 
} from 'react-router-dom/cjs/react-router-dom'; 
import ScrollToTop from './components/body/ScrollToTop';
import MainNavigation from './components/Navigation/MainNavigation';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ProductRange from './pages/ProductRange';
import FAQ from './pages/FAQ';
import LoadingSpinner from './components/UIElements/LoadingSpinner';



const App = () => {
  const routes = (
    <Switch>
          <Route path = "/" exact>
            <Home />
          </Route>
          <Route path = "/ProductRange" exact>
            <ProductRange />
          </Route>
          <Route path= "/AboutUs" exact>
            <AboutUs />
          </Route>
          <Route path= "/FAQ" exact>
            <FAQ />
          </Route>
          <Redirect to = "/"/>
        </Switch>
  );

  return (
    <Router>
      <ScrollToTop />
      <MainNavigation/>
      <main>
        <Suspense
          fallback = {
            <div className='center'>
              <LoadingSpinner/>
            </div>
          }
        >
          {routes}
        </Suspense>
      </main>
    </Router>
  );
}

export default App;
