import Name from './status/PokemonName.js'
import './App.css';
import Header from './status/Header.js';


function App() {
  return (
    <div>
    <Header/>
    <div className="App">
         
      <fieldset className='field'>
       
        <Name/>
      </fieldset>
      <fieldset className='field'>
        <Name/>
      </fieldset>
      <fieldset className='field'>
        <Name/>
      </fieldset>
      <fieldset className='field'>
        <Name/>
      </fieldset>
      <fieldset className='field'>
        <Name/>
      </fieldset>
      <fieldset className='field'>
        <Name/>
      </fieldset>
      <fieldset className='field'>
        <Name/>
      </fieldset>
      <fieldset className='field'>
        <Name/>
      </fieldset>

    
   </div>
    </div>
  );
}

export default App;
