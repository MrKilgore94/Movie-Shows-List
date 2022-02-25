
import './App.css';
import TitleList from './TitleList'

function App() {
  return (
    <div className="App">

      


      <TitleList name='Movie/Shows list' initialTitles={[
        {id: 1, title: 'Dune', watched: false},
        {id: 2, title: 'Uncharted', watched: false},
        {id: 3, title: '300', watched: true},
        {id: 4, title: 'American Sniper', watched: true},
        


    
    
    
    ]}/>



    </div>
  );
}

export default App;
