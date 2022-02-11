import React from "react";
import { fetchUsers } from "../../redux/user/userActions";
import { connect } from "react-redux";
import { useEffect } from "react";

const UserInfo = ({ userData, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, []);
  console.log(userData);
  if (userData.loading) {
    return <h2>Loading...</h2>;
  }
  if (userData.error) {
    return <h2>{userData.error}</h2>;
  }

  return (
    <div>
      {userData?.users?.map((user) => (
        <h4>{user.name}</h4>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
