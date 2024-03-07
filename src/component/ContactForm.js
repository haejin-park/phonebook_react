import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux';

const ContactForm = () => {
  let [name, setName] = useState('');
  let [phoneNumber, setPhoneNumber] = useState('');
  const dispatch = useDispatch();
  const addContact = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_CONTACT",
      payload: { name, phoneNumber }
    });
    setName('');
    setPhoneNumber('');
  }
  return (
    <div>
      <Form onSubmit={addContact}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>이름</Form.Label>
        <Form.Control type="text" value={name} placeholder="이름을 입력해주세요" onChange={(e) => setName(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPhoneNumber">
        <Form.Label>전화번호</Form.Label>
        <Form.Control type="number" value={phoneNumber} placeholder="전화번호를 입력해주세요" onChange={(e) => setPhoneNumber(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        추가
      </Button>
    </Form>
    </div>
  )
}

export default ContactForm
