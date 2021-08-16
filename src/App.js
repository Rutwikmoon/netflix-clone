import './App.css';
import Row from './row';
import request from './Requests';
import Banner from './Banner';
import React from 'react';
import Nav from './Nav';


function App() {
  return (
    <div className="App">
     <Nav/>
     <Banner />
     <Row 
       title="NETFLIX ORIGINALS"
       isLargeRow={true}
       fetchUrl={request.fetchNetflixOriginals}/>
     <Row title="Trending Now" fetchUrl={request.fetchTrending} />
     <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
     <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
     <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
     <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
     <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
     <Row title="Documentries" fetchUrl={request.fetchDocumentries} />
     
    </div>
  );
}

export default App;
