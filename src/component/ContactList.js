import React, { useEffect, useState } from 'react'
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'
import { useSelector } from 'react-redux';

const ContactList = () => {
  let {contactList, keyword} = useSelector((state) => state);
  let [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    let list = contactList.filter((contact) => {
      return contact.name.includes(keyword);
    });
    if(keyword!==""){
      setFilteredList(list);
    } else {
      setFilteredList(contactList);
    }
  }, [keyword, contactList])

  return (
    <div>
      <SearchBox />
      num:{filteredList.length}
      {filteredList.map((item, index) => (
        <ContactItem key={index} item={item}/>
      ))}
    </div>
  )
}

export default ContactList