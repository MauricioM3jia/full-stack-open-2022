import PersonMap from './PersonMap.jsx'
const Person = ({persons, newSearch}) => {
    return (  
        <>
             {persons
             .filter(person => person.name.toLowerCase().includes(newSearch))
            .map(({name, number}) =>( 
              <PersonMap  key={name} name={name} number={number}/> 
                
       ))}
        </>
    );
}
 
export default Person;