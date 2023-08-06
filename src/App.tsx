import React, { useState } from "react";
import "./App.css";

type UserType = {
  id: number;
  userName: string;
  phoneNumber: string;
};

function App() {
  const [users, setUsers] = useState<UserType[]>([
    {
      id: 1,
      userName: "Ozumahe",
      phoneNumber: "7397873082878",
    },
    {
      id: 2,
      userName: "Micheal",
      phoneNumber: "7397873082878",
    },
    {
      id: 3,
      userName: "Job",
      phoneNumber: "7397873082878",
    },
    {
      id: 4,
      userName: "Uche",
      phoneNumber: "7397873082878",
    },
    {
      id: 5,
      userName: "Faith",
      phoneNumber: "7397873082878",
    },
    {
      id: 6,
      userName: "Ozumahe",
      phoneNumber: "7397873082878",
    },
  ]);

  //How can you make it more efficient? so it does not calculate duplicates for each time for every user.

  const findDuplicatedUserName = (userName: string) => {
    let duplicatedUsers = [];

    for (let i = 0; i < users.length; i++) {
      const element = users[i];

      const existingUser = duplicatedUsers.find(
        (data) => data.userName === element.userName
      );
      const existingUserIndex = duplicatedUsers.findIndex(
        (data) => data.userName === element.userName
      );

      if (existingUser) {
        duplicatedUsers[existingUserIndex].count++;
      } else {
        duplicatedUsers.push({ userName: element.userName, count: 1 });
      }
    }

    const result = duplicatedUsers.reduce(
      (acc: string[], value: { count: number; userName: string }) => {
        if (value.count > 1) {
          acc.push(value.userName);
        }
        return acc;
      },
      []
    );

    if (result.includes(userName)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="app" style={{}}>
      {users.map(({ id, userName, phoneNumber }) => (
        <div key={id}>
          {findDuplicatedUserName(userName) ? (
            <div style={{ color: "#F00" }}>X</div>
          ) : null}
          <p style={{ color: "" }}>{userName}</p>
          <p>{phoneNumber}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
