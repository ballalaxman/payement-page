import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("isLogged", true);
    navigate("/");
  };
  return (
    <div className="container login-page">
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="id">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
