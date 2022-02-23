
import './App.css';
import TitleList from './TitleList'

function App() {
  return (
    <div className="App">

      


      <TitleList name='Movie/Shows list' initialTitles={[
        {id: 1, title: 'Dune', read: false},
        {id: 2, title: 'Uncharted', read: false},
        {id: 3, title: '300', read: true},
        {id: 4, title: 'American Sniper', read: true},

    
    
    
    ]}/>



    </div>
  );
}

export default App;
