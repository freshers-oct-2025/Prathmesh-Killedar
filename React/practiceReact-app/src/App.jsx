import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("Fetching data");
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);

  return (
    <>
      <div>
        {/* <h2>User List</h2>
        <ul>
          {users.map((u) => (
            <li key={u.id}>
              {u.name} Company Name: {u.company?.name}
            </li>
          ))}
        </ul> */}

        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {users
              .slice(0, 10)
              .filter((users) => users.id % 2 == 1)
              .map((fields) => (
                <tr key={fields.id}>
                  <td>{fields.id}</td>
                  <td>{fields.name}</td>
                  <td>{fields.email}</td>
                  <td>{fields.body}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
