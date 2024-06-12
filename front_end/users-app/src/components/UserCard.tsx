import React from 'react';
import './css/UserCard.css';

interface UserCardProps {
  firstName: string;
  lastName: string;
  jobTitle: string;
  phone: string;
  email: string;
}

const UserCard: React.FC<UserCardProps> = ({ firstName, lastName, jobTitle, phone, email }) => {
  return (
    <div className="user-card">
      <h3>{firstName} {lastName}</h3>
      <p>{jobTitle}</p>
      <p>{phone}</p>
      <p>{email}</p>
    </div>
  );
};

export default UserCard;
