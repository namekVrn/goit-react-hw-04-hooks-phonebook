import {useState} from 'react';
import css from '../Form/Form.module.css'

const Form =({onDataForm})=>{
    
    const [name, setName]= useState('')
    const [tel, setTel]= useState('')
    const [comment, setComment]= useState('')
    
    const changeState = evt =>{
        const {name, value} = evt.currentTarget
        switch(name){
            case "name" :
                setName(value);
                break;
            case "tel" :
                setTel(value)
                break;   
            case "comment" :
                setComment(value)
                break
        }
        
    }
  
    const formSubmit = (evt) => {
        evt.preventDefault()
        onDataForm({tel,name,comment})
        resetForm()
        
    }
    const resetForm = () => {
       setName('')
       setTel('')
       setComment('')
    }
        return(
            <form onSubmit={formSubmit} className={css.form}type='submit'>
                <input
                    className={css.inputName}
                    type="text"
                    value={name}
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={changeState}
                    placeholder="имя"
                    />
                <input
                    className={css.inputName}
                    type="tel"
                    onChange={changeState}
                    name="tel"
                    value={tel}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    placeholder="телефон"
                    />
                <input
                    className={css.inputName}
                    type="text"
                    onChange={changeState}
                    name="comment"
                    value={comment}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    placeholder="Комментари"
                    />    
                <button className={css.btn} type="submit">
                Добавить
                </button>    
            </form>
        )
    
}
export default Form