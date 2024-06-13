import React, { useState, useEffect } from 'react';
import './css/UserSearch.css';
import UserCard from './UserCard';
import AddUserForm from './AddUserForm';

interface User {
  firstName: string;
  lastName: string;
  jobTitle: string;
  phone: string;
  email: string;
}

const UserSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState<User[]>([]);
  const [newUser, setNewUser] = useState<User>({
    firstName: '',
    lastName: '',
    jobTitle: '',
    phone: '',
    email: ''
  });

  useEffect(() => {
    if (query.length >= 2) {
      fetch(`https://localhost:5001/api/users?search=${query}`)
        .then(response => response.json())
        .then(data => setUsers(data))
        .catch(error => console.error('Error fetching users:', error));
    } else {
      setUsers([]);
    }
  }, [query]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    fetch('https://localhost:5001/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser),
    })
      .then(response => response.json())
      .then(data => {
        setUsers([...users, data]);
        setNewUser({ firstName: '', lastName: '', jobTitle: '', phone: '', email: '' });
      })
      .catch(error => console.error('Error adding user:', error));
  };

  return (
    <div className="user-search">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type first or last name..."
      />
      <AddUserForm
        newUser={newUser}
        handleInputChange={handleInputChange}
        handleAddUser={handleAddUser}
      />
      <div className="user-list">
        {users.map((user, index) => (
          <UserCard key={index} {...user} />
        ))}
      </div>
    </div>
  );
};

export default UserSearch;
