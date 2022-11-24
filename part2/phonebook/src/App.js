import { useState ,useEffect} from 'react';
import axios from 'axios'
import Search from './components/Search.jsx'
import PersonForm from './components/PersonForm.jsx'
import Person from './components/Person.jsx'
const App = () => {


  const [persons,setPersons]=useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber,setNewNumber]= useState('');
  const [newSearch,setNewSearch]=useState('');
  const apiUrl= "http://localhost:3001/persons";
 
  useEffect(()=>{
      async function fetchDataApi(){
        const response = await axios.get(apiUrl);
        console.log(response);
        setPersons(response.data);
      }fetchDataApi();
  },[])
  const handleChange = setValue => e =>setValue(e.target.value)

  const addPersonInfo = (event)=>{
    event.preventDefault();
    if(persons.find(person =>person.name === newName)){

      alert(`${newName} is already added to phonebook`)
      setNewName('')
    }else{
      const addNewPerson = {
        name:newName,
        number:newNumber
      }
      setPersons(persons.concat(addNewPerson))
      setNewName('')
    }
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Search newSearch={newSearch} handleChange={handleChange(setNewSearch)}/>
      <h2>Add new </h2>
      <PersonForm name={newName} 
      number={newNumber} 
      handleChangeName={handleChange(setNewName)}
      handleChangeNumber={handleChange(setNewNumber)}
      handleChangeAddPerson={addPersonInfo}/>
      <h2>Numbers</h2>
      <Person  persons={persons} newSearch={newSearch}/>
    </div>
  )
}

export default App

