import background from './background.png'
import './App.css';
import tempBackground from './temporaryBackground.webp';
import logo from './logo.jpg'
import { Nav } from './components/nav';
import { Banner } from './components/banner1';
import { Text } from './components/text';
import { Banner2 } from './components/banner2';
import { Banner3 } from './components/banner3';
import { Banner4 } from './components/banner4';
import { Event } from './components/event';

function App() {
  const screen = window.innerWidth;

  return (
    <div>
      {/* <Nav/> */}
      <Banner/>
      <Event/>
      <Text/>
      {/* <Banner2 /> */}
      <Banner3 />
      {/* <Banner4 /> */}
      <div style={{
          textAlign: 'center',
          color: 'white',
          marginTop: '20%',
          fontSize: screen < 500 ? '0.4em' : null
        }}
      >
        <h1 style={{margin:0}}>
          Address: Stora nygatan 23
          <br/>
          { screen < 500 ? null : <br/>}
          211 37 Malmö
          { screen < 500 ? null : <br/>}
          <br/>
          040 121252
        </h1>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    </div>
  );
}


// function App() {
//   return (
//     <Banner />
//   );
// }

export default App;
