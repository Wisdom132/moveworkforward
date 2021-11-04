import * as React from "react";
import "./form.scss";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { RootState, AppDispatch } from "../redux/store";
import { chooseEmail, chooseName } from "../redux/rootSlice";

type Inputs = {
  name: string;
  email: string;
};

export const Step1: React.FC<{}> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const history = useHistory();
  const name = useSelector((state: RootState) => state.name);
  const email = useSelector((state: RootState) => state.email);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ defaultValues: { name, email } });

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    dispatch(chooseName(data.name));
    dispatch(chooseEmail(data.email));
    history.push("set-password");
  };

  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-img" data-tilt>
            <img src="/login.png" alt="IMG"></img>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="login-form">
            <span className="login-form-title">Member Login</span>
            <div>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  required
                  className="form-control"
                  type="text"
                  {...register("name", { required: true })}
                />
                {errors.name && <small>Name is required</small>}
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  required
                  type="email"
                  className="form-control"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                {errors.email && <small>Email is required</small>}
                {errors.email && <small> {errors.email.message} </small>}
              </div>
            </div>
            <button className="next-btn">Next</button>
          </form>
        </div>
      </div>
    </>
  );
};
