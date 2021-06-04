import './Profile.scss';

import React from 'react';
import { Profile } from './User';
import { Statistics } from './Statistics';
import { FriendList } from './Friend-list';
import { TransactionHistory } from './Transaction-history';

import User from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

const App = () => {
  return (
    <>
      <Profile
        name={User.name}
        tag={User.tag}
        location={User.location}
        avatar={User.avatar}
        stats={User.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
