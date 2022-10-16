import user from "../components/user/user.json"
import { Profile } from "./user/user.jsx";
import data from './statistic/data.json'
import { Statistic } from "./statistic/statistic.jsx";
import friends from "./friends/friends.json";
import { FriendList } from "./friends/friendsList";
import transactions from "./Transaction/transactions.json"
import { TransactionHistory } from "./Transaction/transactionHistory";



export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
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

      <Statistic title="Upload stats" stats={data} />
      <Statistic stats={data} />
      
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
    
  );
};
