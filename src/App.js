import background from './background.png'
import './App.css';
import { Nav } from './components/nav';
import { Banner } from './components/banner1';
import { Text } from './components/text';
import { Banner2 } from './components/banner2';
import { Banner3 } from './components/banner3';
import { Banner4 } from './components/banner4';

function App() {
  return (
    <div>
      <Nav/>
      <Banner/>
      <Text/>
      <Banner2 />
      <Banner3 />
      <Banner4 />
      <div style={{height: 500}} />
    </div>
  );
}

export default App;
