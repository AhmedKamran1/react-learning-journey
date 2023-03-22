import { useState } from "react";
import Card from "../UI/Card";
import styles from "./UsersList.module.css";

function UsersList(props) {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.key}>
            {user.name} ({user.age} Years Old)
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UsersList;
