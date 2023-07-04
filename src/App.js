import Board from './components/Board';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      <h1 className='heading'>
        <span className='span'>TIC </span> 
        <span>TAC </span>
        <span className='span'>TOE!</span>
      </h1>
        <Board/>

    <h6 className='name-tag'>
       Develped with React by  
      <a href='https://github.com/Omonayeg'>      - Will Omonaye.</a>
   </h6>
      </header>
    
    </div>
  );
}

export default App;
