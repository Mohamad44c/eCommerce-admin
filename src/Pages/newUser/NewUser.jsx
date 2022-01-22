import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="admin123" />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="Mohamad Chebli" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="admin@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+961 03 123123" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="Beirut | Lebanon" />
        </div>
        <div className="newUserItem">
          {/* <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
          </div> */}
        </div>
        <div>
          <button className="newUserButton">Create</button>
        </div>
        
      </form>
    </div>
  );
}
