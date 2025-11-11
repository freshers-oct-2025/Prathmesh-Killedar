import { useEffect, useState } from "react";

function Github() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/10")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setdata(data);
      });
  }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github Profile Username: {data.username}
    </div>
  );
}

export default Github;
