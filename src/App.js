import React from 'react';
import './App.css';
import Customer from './components/Customer';

const customer ={
  'name': '홍길동',
  'birthday': '970526',
  'gender': '남자',
  'job': '대학생',
  'age': '24',
}


function App() {
  return (
      <Customer
        name={customer.name}
        birthday={customer.birthday}
        gender={customer.gender}
        job={customer.job}
        age={customer.age}
      />
  );
}

export default App;
