import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Row from './components/Row';
import config from './components/config';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="Netflix Original" fetchUrl={config.orignal} isLargePoster />
      <Row title="Trending Now" fetchUrl={config.trending} />
      <Row title="Action Movies" fetchUrl={config.action} />
      <Row title="Comedy Movies" fetchUrl={config.comedy} />
      <Row title="Horror Movies" fetchUrl={config.horror} />
      <Row title="Romance Movies" fetchUrl={config.romance} />
      <Row title="Documentries" fetchUrl={config.documentaries} />
    </div>
  );
}

export default App;
