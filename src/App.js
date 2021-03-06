import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import SheetCreationPage from './pages/sheet-creation-page/sheet-creation-page.component';
import HomePage from './pages/home-page/home-page.component';
import Footer from './components/footer/footer.component';
import NewSheet from './pages/new-sheet/new-sheet.component';
import ResourcesPage from './pages/resources-page/resources-page.component';

import 'bootstrap/dist/css/bootstrap.min.css';
import DataUse from './pages/data-use-page/data-use-page.component';
import LandingPage from './pages/landing-page/landing-page.component';
import ContactPage from './pages/contact-page/contact-page.component';

function App() {
  return (
    <Router>
      <div className="app">
        <Route path="/:id">
          <Header />
        </Route>
        <Route exact path="/">
          <Header />
        </Route>
        <Switch>
          <Route exact path="/data">
            <DataUse />
          </Route>
          <Route exact path="/contact">
            <ContactPage />
          </Route>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/create-budget-tracker">
            <SheetCreationPage />
          </Route>
          <Route exact path="/:id">
            <HomePage />
          </Route>
          <Route exact path="/:id/add-new">
            <NewSheet />
          </Route>
          <Route exact path="/:id/resources">
            <ResourcesPage />
          </Route>
          <Route exact path="/:id/data">
            <DataUse />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
