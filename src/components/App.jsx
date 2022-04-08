import react, {useState,useEffect,useRef} from 'react';
import { nanoid } from 'nanoid';
import Form from './Form'
import ContactsList from './ContactsList'
import Filter from './Filter'
import ModelDetails from './ModelDetails'
import css from '../components/box.module.css'

const App = ()=>{

  const [contacts, setContacts] = useState(()=>JSON.parse(localStorage.getItem('contacts')) ?? []);
  const [filter, setFilter] = useState('');

   useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts))
   }, [contacts])


  
  const deleteContact = idContact => {
    setContacts(contacts.filter(contact => contact.id !== idContact));
      };


  const formSubmitHandler = data => {
    const contact = {
      id: nanoid(),
      name: data.name,
      tel: data.tel,
      comment: data.comment
    };

    if (contacts.find(contact => contact.tel.toLowerCase() === data.tel.toLowerCase())) {
      alert(`${data.name} is already in contacts`);
      return;
    };

    setContacts(prevState => [contact, ...prevState]
    );
  };

  const changeFilter = event => {
    console.log(event)
    setFilter(event);    
   };

  
  
  const filtredContacts = contacts.filter(contact =>
    contact.tel.toLowerCase().includes(filter),
  );
 
    return(
      <>
        <div className={css.box}>
          {/* <button type="button" onClick={this.showModal}>Открыть модалку</button>
          {showModal && <ModelDetails onShowModal={this.showModal}>
            <h1>Учи JS</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, pariatur.</p>
            <button type="button" onClick={this.showModal}>Закрыть</button>
          </ModelDetails>} */}

          <h2 className={css.titleTel}>Узнай кто звонил ? <br/>Если спам, добавь в базу номер!</h2>
          <Form onDataForm={formSubmitHandler} />
          <Filter value={filter} upDataFilterState={changeFilter}/>
          <ContactsList onDeleteTel={deleteContact} contact={filtredContacts}/>
        
        </div>
      </>
    )
  
}
export default App