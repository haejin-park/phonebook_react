import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
/*
검색 값 입력한다 
찾기 누른다
useDispatch로 키워드 보낸다
*/ 
const SearchBox = () => {
  let [keyword, setKeyword] = useState("");
  let dispatch = useDispatch();
  const searchByName = (e) => {
    e.preventDefault();
    dispatch({
      type: "SEARCH_BY_USERNAME",
      payload: {keyword}
    })

  }

  return (
    <div>
      <Form onSubmit={searchByName}> 
        <Row>
          <Col lg={10}>
            <Form.Control type="text" placeholder="이름을 입력해주세요"  onChange={(e) => setKeyword(e.target.value)}/>
          </Col>
          <Col lg={2}>
            <Button type="submit">찾기</Button>
          </Col>
        </Row>
      </Form> 
    </div>
  )
}

export default SearchBox