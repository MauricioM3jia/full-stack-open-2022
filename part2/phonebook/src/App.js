import { useState } from 'react'
import Search from './components/Search.jsx'
import PersonForm from './components/PersonForm.jsx'
import Person from './components/Person.jsx'
const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('');
  const [newNumber,setNewNumber]= useState('');
  const [newSearch,setNewSearch]=useState('');


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

