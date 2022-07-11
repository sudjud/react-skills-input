import { useState } from 'react';
import Item from './components/Item';
import './style.sass'

function App() {
  const [skills, setSkills] = useState([]); 
  const [ inpText, setInpText ] = useState('');
  const [ inpEmpty, setInpEmpty ] = useState(false);
  const [ btnDisabled, setBtnDisabled ] = useState(true);

  function pushToSkills() {
    setSkills([...skills, inpText]);
    setInpText('');
    setBtnDisabled(true);
  }


  const handleSetIput = (e) => {
      setInpText(e.target.value)
      setInpEmpty(false)
      setBtnDisabled(false)
      if (!e.target.value) setBtnDisabled(true);
  }

  const delItem = (skill) => {
    setSkills(skills.filter( item => {
      return item !== skill
    } ))
  }

  return (
    <div className="app">
      <div className="skills">
        <div className="skills__input">
          <input 
            type="text" 
            value={inpText}
            className="skills__input_text" 
            onChange={handleSetIput} 
            onBlur={() => {
              if ( !inpText ) setInpEmpty(true);
            }}
          />
          <input 
            type="button" 
            value="Отправить" 
            className='skills__input_ok' 
            disabled = { btnDisabled }
            onClick = {pushToSkills}
          />
          { inpEmpty && <div style={{color: 'red'}}>Поле не должно быть пустым</div> }
        </div>
        <div className="skills__items">
          {skills.map( (skill) => {
           return <Item 
            name={skill} 
            clickHandler = {() => delItem(skill)}
           />
          }) }
        </div>
      </div>
    </div>
  );
}

export default App;
