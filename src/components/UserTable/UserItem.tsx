import { create } from "domain";
import React from "react";
import {More} from '../../shared/imageExports'

interface Props {
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  createdAt: Date;
  id: number;
}

const UserItem: React.FC<Props> = ({
  orgName,
  userName,
  email,
  createdAt,
  phoneNumber,
  id,
}) => {
    const status = ['active','blacklisted','pending','inactive'];
  const date = new Date(createdAt);
  const dateFormat = date.toLocaleString("en-US", {
    weekday: "short", // long, short, narrow
    day: "numeric", // numeric, 2-digit
    year: "numeric", // numeric, 2-digit
    month: "short", // numeric, 2-digit, long, short, narrow
    hour: "2-digit", // numeric, 2-digit// numeric, 2-digit
  });
  function getRandomInt(max :number) {
    return Math.floor(Math.random() * max);
  }
  const statusValue= status[getRandomInt(4)];

  return (
    <div className="headings user">
      <div className="header">
        <p>{orgName}</p>
      </div>
      <div className="header">
        <p>{userName}</p>
      </div>
      <div className="header">
        <p>{email}</p>
      </div>
      <div className="header">
        <p>{phoneNumber}</p>
      </div>
      <div className="header">
        <p>{dateFormat}</p>
      </div>
      <div className="header">
        <p className={statusValue}>{statusValue}</p>
      </div>
      <div className="header">
        <img src={More} alt="" />
      </div>
    </div>
  );
};

export default UserItem;
