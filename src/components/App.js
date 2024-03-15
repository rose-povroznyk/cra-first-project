import React, { Component } from 'react';
import UserList from './UserList/UserList';
import SignInForm from './SignInForm/SignInForm';
import HiForm from './HiForm/HiForm';
import HelloParent from './HelloForm/HelloParent';
import TodoList from './TodoList/TodoList';
import UserCard from './UserList/UserCard';
import List from './List/List';
import FlexContainer from './FlexContainer/FlexContainer';

function App() {
  return (
    <>
      <UserList />
      {/* <FlexContainer
        display='flex'
        flexDirection='row'
        justifyContent='center'
        alignItems='stretch'
        backgroundColor='maroon'
        color='white'
      >
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </FlexContainer> */}
    </>
  );
}

export default App;
