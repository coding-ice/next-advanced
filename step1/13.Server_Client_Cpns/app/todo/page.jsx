export default async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = (await res.json()).slice(0, 10);

  return (
    <ul>
      {data.map(({ id, title }) => {
        return <li key={id}>{title}</li>;
      })}
    </ul>
  );
};



// "use client";

// import { useEffect, useState } from "react";

// export default () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//       const data = (await res.json()).slice(0, 10);
//       setData(data);
//     }
//     fetchData();
//   }, []);

//   return (
//     <ul>
//       {data.map(({ id, title }) => {
//         return <li key={id}>{title}</li>;
//       })}
//     </ul>
//   );
// };
