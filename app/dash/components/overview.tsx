"use client"
import React, { useState, useEffect } from 'react';
import { clerkClient } from '@clerk/nextjs';
import { User as ClerkUser } from '@clerk/backend/dist/types/api/resources/User';

interface User extends ClerkUser {
  fullName: string;
}

const Overview = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userList = await clerkClient.users.getUserList();
        console.log(userList); // Add this line to log the userList
        const formattedUsers = userList.map((user) => ({
          ...user,
          fullName: `${user.firstName} ${user.lastName}`,
        }));
        console.log(formattedUsers); // Add this line to log the formattedUsers
        setUsers(formattedUsers);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users who signed in:</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.fullName}</li>
        ))}
      </ul>
    </div>
  );
};

export default Overview;