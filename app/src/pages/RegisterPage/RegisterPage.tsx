import { useForm } from "react-hook-form";
import { UserModel } from "../../models/UserModel";
import { userService } from "../../services/UserService";
import { useDispatch } from "react-redux";
import { loginRedux } from "../../app/authSlice";
import { toastAlerts } from "../../helpers/toastAlerts";
import "./RegisterPage.css";
import GoogleAuth from "../../Components/GoogleAuth/GoogleAuth";

function RegisterPage(): JSX.Element {
  const { register, handleSubmit } = useForm<UserModel>();
  const dispatch = useDispatch();

  async function registerForm(user: UserModel) {
    console.log(user);
    try {
      const results = await userService.Register(user);
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
      <form onSubmit={handleSubmit(registerForm)}>
        <div className="labelInputDiv">
          <label htmlFor="">First Name: </label>
          <input type="text" {...register("firstName", { required: true })} />
        </div>

        <div className="labelInputDiv">
          <label htmlFor="">Last Name: </label>
          <input type="text" {...register("lastName", { required: true })} />
        </div>

        <div className="labelInputDiv">
          <label htmlFor="">Job Title: </label>
          <select {...register("title", { required: true })}>
            <option value="developer">Developer</option>
            <option value="uxui">UX/UI</option>
            <option value="productManager">Product Manager</option>
          </select>
        </div>

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
      </form>
    </div>
  );
}

export default RegisterPage;
