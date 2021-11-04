import * as React from "react";
import "./form.scss";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { RootState, AppDispatch } from "../redux/store";
import { choosePassword } from "../redux/rootSlice";

type Inputs = {
    password: string,
    confirmPassword: string,
}

export const Step2: React.FC<{}> = () => {
    const [passwordError, setPasswordError] = React.useState<string | undefined>();
    const dispatch = useDispatch<AppDispatch>();
    const history = useHistory();
    const password = useSelector((state: RootState) => state.password);
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({ defaultValues: { password } });

    const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
        if (data.password !== data.confirmPassword) {
            setPasswordError("Password Doesn't Match");
            return;
        }
        dispatch(choosePassword(data.password));
        history.push("./completed");
    }

    return (

      <div className="container">
        <div className="card">
          <div className="card-img" data-tilt>
            <img src="/login.png" alt="IMG"></img>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="login-form">
            <span className="login-form-title">Set Password</span>
            <div>
              <div className="form-group">
                <label>Set Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  {...register("password", { required: true })}
                />

                {errors.password && <small>Password is required</small>}
              </div>

              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="form-control"
                  {...register("confirmPassword", { required: true })}
                />
                {passwordError && <small> Password does not match </small>}
              </div>
            </div>
            <button className="prev-btn" onClick={() => history.push("/")}>
              Previous
            </button>
            <button className="next-btn">Next</button>
          </form>
        </div>
      </div>
    );
}