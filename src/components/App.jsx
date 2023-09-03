import React from 'react';
import { Profile } from './Profile'; 
import user from '../data/user.json';
import Statistics from './Statistics'; 
import data from '../data/data.json';
import FriendList from './FriendList'; 
import friends from '../data/friends.json'; 
import transactions from '../data/transactions.json';
import TransactionHistory from './TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
       
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      
      <Statistics title="Upload stats" stats={data} />
      
      <h1>Friend List</h1>
      <FriendList friends={friends} /> {}

      <TransactionHistory items={transactions} />
      
      <p style={{ fontSize: '20px' }}>
        Uicons by <a href="https://www.flaticon.com/uicons" style={{ fontSize: '20px' }}>Flaticon</a>
      </p>
    </div>
  );
};
