function UserList({ onFollow }) {
    const users = ['Wekesa', 'Charlie Kamau', 'Eve Jerop', 'Uhuru Kenyatta'];
  
    return (
      <div className="user-list">
        <h3>Suggestions for You</h3>
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              {user}
              <button onClick={() => onFollow(user)}>Follow</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default UserList;
  