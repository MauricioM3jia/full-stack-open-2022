const PersonForm = ({name,number, handleChangeName, handleChangeNumber,handleChangeAddPerson}) => {
    return (  
        <>
            <form onSubmit={handleChangeAddPerson}>
        <div>
         
          name:  <input value={name} onChange={handleChangeName}/><br /><br />
          number: <input value={number} type="number"  onChange={handleChangeNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
        </>
    );
}
 
export default PersonForm;