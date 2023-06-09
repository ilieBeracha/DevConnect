import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import GoogleAuth from "../../Components/GoogleAuth/GoogleAuth";
import { loginRedux } from "../../app/authSlice";
import { toastAlerts } from "../../helpers/toastAlerts";
import { UserModel } from "../../models/UserModel";
import { userService } from "../../services/UserService";
import "./LoginPage.css";
import { NavLink } from "react-router-dom";

function LoginPage(): JSX.Element {
  const { register, handleSubmit } = useForm<UserModel>();
  const dispatch = useDispatch();

  async function LoginForm(user: UserModel) {
    console.log(user);
    try {
      const results = await userService.Login(user);
      if (results.status === 200) {
        console.log(results);
        dispatch(loginRedux(results.data));
        toastAlerts.toastSuccess("good");
      }
    } catch (e: any) {
      console.log(e);

      toastAlerts.toastError(e.response.data);
    }
  }

  return (
    <div className="RegisterPage">
      <div className="background">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>
        <div className="shape shape4"></div>
        <div className="shape shape5"></div>
      </div>
      <form onSubmit={handleSubmit(LoginForm)}>
        <div className="labelInputDiv">
          <label htmlFor="">Email: </label>
          <input type="mail" {...register("email", { required: true })} />
        </div>

        <div className="labelInputDiv">
          <label htmlFor="">Password: </label>
          <input
            type="password"
            {...register("password", { required: true })}
          />
        </div>

        <button>Submit</button>
        <GoogleAuth />
        <NavLink to={'/registerpage'}>Dont have an account</NavLink>
      </form>
    </div>
  );
}

export default LoginPage;
