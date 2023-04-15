import { useState } from 'react';
import './App.css';
import { Users } from './Data/Users';

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredUsers = Users.filter((user) => {
    const fullName = `${user.firstName} ${user.lastName}`;
    return fullName.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const Profile = ({picture, id, title, firstName, lastName}) => (
    <ul className='flex-container'>
    <li className='flex-item'>
      <img src={picture} alt={`${firstName} ${lastName}`} className='image' />
      <div className='box-container'>
        <h2>{`${id} ${title} ${firstName} ${lastName}`}</h2>
      </div>
    </li>
    </ul>
  )

  return (
    <div className='app'>
      <input type="text" value={searchQuery} onChange={handleSearchQueryChange} 
      placeholder="Search by name" className='search'/>
      <ul className='list'>
        {filteredUsers.map((user) => (
          <Profile key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
 } 


export default App;


/*<input type='text' placeholder='Search by name...' className='search'
       onChange={(event) => setSearchQuery(event.target.value)}/>
      <ul className='list'>
       {Users.filter(user => user.firstName && user.lastName.toLowerCase().includes(searchQuery)).map((user) => (
        <li key={user.id} className='listItem'>{user.id}, {} {user.title}. {user.firstName} {user.lastName} </li>
       ))}

      </ul>*/