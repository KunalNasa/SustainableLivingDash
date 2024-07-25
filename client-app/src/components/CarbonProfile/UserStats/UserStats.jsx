import React from 'react';
import UserForm from './UserForm';
import UserGraphs from './UserGraphs';
import Footer from "../../Footer"
const UserStats = (props) => {
    const {updateReloadState} = props;
  return (
    <div>
        <UserForm updateReloadState = {updateReloadState}/>
        <UserGraphs updateReloadState = {updateReloadState}/>
        <Footer/>
    </div>
  );
};

export default UserStats;
