import axios from "axios";
import { useEffect, useState } from "react";

function PollingData_16() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchAllData = () => {
      axios
        .get("https://jsonplaceholder.typicode.com/photos")
        .then((res) => setUsers(res.data.slice(0, 20)))
        .catch((error) => console.error("Error fetching data:", error));
    };

    fetchAllData();

    const intervalId = setInterval(fetchAllData, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App">
      <table className="table table-hover table-light">
        <thead className="table-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>
                <img src={item.url} alt="" height={"200px"} />
              </td>
              <td>
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-danger mx-3">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PollingData_16;
