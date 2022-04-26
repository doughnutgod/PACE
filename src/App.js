//import Card from './components/Card';
import {Route, Routes} from 'react-router-dom';
import Homepage from './pages/Homepage';
import FormEntry from './pages/FormEntry';
import FormHistory from './pages/FormHistory';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/formentry" element={<FormEntry />} />
        <Route path="/formhistory" element={<FormHistory />} />
      </Routes>
    </Layout>
  );
}

export default App;

/*
<div className="App">
      <h1>Hello World!</h1>
      <Card cardHeader="test the head of card"/>
      <Card cardHeader="test the head of card2"/>
      <Card cardHeader="test the head of card3"/>
    </div>
*/