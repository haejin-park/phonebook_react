import React, { useEffect, useState } from 'react'
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'
import { useSelector } from 'react-redux';

/*
useSelector로 store에서 값 가져온다
contactList에서 일치하는 name값 있으면 보여준다(검색값 들어간 filterList를 useState로 만들어서 적용해주기)
적용할 땐 useEffect 사용(의존성 배열엔 keyword(keyword바뀔 때 마다 반영되게), contactList(추가되는거 바로 반영되게))
keyword가 빈값이 아니면 contactList에서 keyword filter한 값, 빈값이면 원본 contactList
*/

const ContactList = () => {
  let {contactList, keyword} = useSelector((state) => state);
  let [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    console.log("keyword", keyword);
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