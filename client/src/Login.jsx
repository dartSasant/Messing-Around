import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
const Login = () => {
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleClick = () => {
    
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Login</legend>

        <label className="label">Email</label>
        <input
          type="email"
          className="input focus:outline-none"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="label">Password</label>

        <div className="flex">
          <input
            value={password}
            type={open ? "text" : "password"}
            className="input focus:outline-none "
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="button"
            className="btn-primary"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {open ? <EyeOff /> : <Eye />}
          </button>
        </div>

        <button className="btn mt-4" onClick={handleClick}>
          Login
        </button>
      </fieldset>
    </div>
  );
};

export default Login;
