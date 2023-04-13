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

function App() {
  return (
    <div>
      {/* <Nav/> */}
      <Banner/>
      <Text/>
      <Banner2 />
      <Banner3 />
      {/* <Banner4 /> */}
      <div style={{
          textAlign: 'center',
          color: 'white',
          marginTop: '20%'
        }}
      >
        <h1>
          Address: Stora nygatan 23
          <br/>
          <br/>
          211 37 Malmö
          <br/>
          <br/>
          040 121252
        </h1>
      </div>
      <div style={{height: 500}} />
    </div>
  );
}


// function App() {
//   return (
//     <Banner />
//   );
// }

export default App;
