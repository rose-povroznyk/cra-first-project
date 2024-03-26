import React, { useState } from 'react';
import { getUsers } from '../../api';
import { useEffect } from 'react';
import { HashLoader } from 'react-spinners';
import UserCard from './UserCard';

const NewUserList = () => {
  const [users, setUsers] = useState([]);

  const [filteredUsers, setFilteredUsers] = useState([]);

  const [userCount, setUserCount] = useState(100);

  const [isLoading, setisLoading] = useState(true);

  const [isError, setisError] = useState(false);

  const [page, setPage] = useState(1);
  //////////////////////////

  const loadPage = () => {
    getUsers(userCount, page)
      .then((data) => {
        const { results } = data;
        setUsers(results);
      })
      .catch((error) => {
        setisError(error);
      })
      .finally(() => {
        setisLoading(false);
      });
  };

  useEffect(() => {
    loadPage();
  }, [page]);

  const renderUsers = () => {
    return filteredUsers.length > 0
      ? filteredUsers.map((user) => (
          <UserCard user={user} key={user.login.uuid} />
        ))
      : users.map((user) => <UserCard user={user} key={user.login.uuid} />);
  };

  const handleSearch = (event) => {
    const {
      target: { value: searchValue },
    } = event;

    if (searchValue === '') {
      setFilteredUsers([]);

      return;
    }

    const filteredUsers = users.filter(
      (user) =>
        user.name.last.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
    );

    setFilteredUsers(filteredUsers);
  };

  const prevBtnHandler = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const nextBtnHandler = () => {
    setPage(page + 1);
  };

  const handleSetUserCount = (event) => {
    const {
      target: { value },
    } = event;

    setUserCount(value);
  };

  const clickHandler = () => {
    getUsers(1, page + 50).then((data) => {
      const { results } = data;

      setUsers((prevUsers) => [...prevUsers, results[0]]);
    });
  };

  return (
    <>
      <h1 className='header-text'>Users List</h1>

      <input type='number' min={1} max={500} onChange={handleSetUserCount} />
      <button onClick={loadPage}>Load users</button>

      <input
        type='text'
        placeholder='Search by lastname'
        onChange={handleSearch}
      />

      <button onClick={() => clickHandler()}>Add user</button>

      {isLoading && (
        <HashLoader
          color='#36d7b7'
          size={300}
          cssOverride={{ display: 'block', margin: '0 auto' }}
        />
      )}
      {isError && <h2>{isError.message}</h2>}

      <button disabled={page === 1 ? true : false} onClick={prevBtnHandler}>
        Previous page
      </button>
      <button onClick={nextBtnHandler}>Next page</button>

      <section className='card-container'>
        {users.length ? renderUsers() : null}
      </section>
    </>
  );
};

export default NewUserList;
