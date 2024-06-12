import React from 'react';
import './css/AddUserForm.css';

interface AddUserFormProps {
  newUser: {
    firstName: string;
    lastName: string;
    jobTitle: string;
    phone: string;
    email: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddUser: (e: React.FormEvent) => void;
}

const AddUserForm: React.FC<AddUserFormProps> = ({ newUser, handleInputChange, handleAddUser }) => {
  return (
    <form onSubmit={handleAddUser} className="add-user-form">
      <input
        type="text"
        name="firstName"
        value={newUser.firstName}
        onChange={handleInputChange}
        placeholder="First Name"
      />
      <input
        type="text"
        name="lastName"
        value={newUser.lastName}
        onChange={handleInputChange}
        placeholder="Last Name"
      />
      <input
        type="text"
        name="jobTitle"
        value={newUser.jobTitle}
        onChange={handleInputChange}
        placeholder="Job Title"
      />
      <input
        type="text"
        name="phone"
        value={newUser.phone}
        onChange={handleInputChange}
        placeholder="Phone"
      />
      <input
        type="email"
        name="email"
        value={newUser.email}
        onChange={handleInputChange}
        placeholder="Email"
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUserForm;
