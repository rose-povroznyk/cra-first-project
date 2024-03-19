import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserList from './UserList/UserList';
import SignInForm from './SignInForm/SignInForm';
import HiForm from './HiForm/HiForm';
import HelloParent from './HelloForm/HelloParent';
import TodoList from './TodoList/TodoList';
import UserCard from './UserList/UserCard';
import List from './List/List';
import FlexContainer from './FlexContainer/FlexContainer';
import WindowResizer from './WindowResizer/WindowResizer';
import Counter from './Counter/Counter';
import AlohaDashboard from './AlohaDashboard/AlohaDashboard';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to='counter'>Go to Counter component</Link>
          </li>
          <li>
            <Link to='users'>Go to UserList component</Link>
          </li>
          <li>
            <Link to='todo'>Go to ToDo component</Link>
          </li>
          <li>
            <Link to='aloja'>Go to Aloha component</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/users' element={<UserList />} />
        <Route path='/todo' element={<TodoList />} />
        <Route path='/aloja' element={<AlohaDashboard />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      {/* <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
      <button
        onClick={() => window.location.assign('https://uk.javascript.info/')}
      >
        assign
      </button>
      <button onClick={() => window.location.reload()}>reload</button>
      <button
        onClick={() =>
          window.location.replace('https://developer.mozilla.org/en-US/')
        }
      >
        replace
      </button>
      <p>lorem ipsum dolor amet</p>
      <button
        onClick={() => {
          window.navigator.clipboard.writeText('lorem ipsum dolor amet');
          toast.success('🦄 Wow you copied to clipboard this blahcadabra!');
        }}
      >
        Click to copy text
      </button>
      <button
        onClick={() => {
          window.navigator.clipboard
            .readText()
            .then((text) => console.log(text));
        }}
      >
        Read text from buffer
      </button>

      <button
        onClick={() => {
          window.navigator.geolocation.getCurrentPosition((positionObject) => {
            console.log(positionObject);
          });
        }}
      >
        Get my current position
      </button> */}
      {/* <WindowResizer /> */}

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
    </BrowserRouter>
  );
}

export default App;
