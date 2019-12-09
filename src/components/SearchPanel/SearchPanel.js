import React from 'react';
import './SearchPanel.scss';


export const SearchPanel = ({ entryField, onChangeField }) => {
  
  const changeField = (event) => {
    onChangeField(event.target.value)
  };
  
  return (
    <div className='search'>
      <h1 className='search__title'>Search</h1>
      <p  className='search__instruction' id='instruction'>
        Use the form below to search for houses to buy.<br/>
        You can search by place-name or click 'My location',
        to search in your current location!
      </p>
      <input className='search__entry-field'
             type="text"
             onChange={changeField}
             value={entryField}/>
      <div className='wrapper-btn'>
        <button  className='search__btn search__btn_go' id='go'>GO</button>
        <button  className='search__btn search__btn_location' id='myLocation'>My location</button>
      </div>
    </div>
  )
};