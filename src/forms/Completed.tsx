import * as React from 'react';
import "./Completed.scss";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Link } from 'react-router-dom';


export default function Completed(props: any) {
    const state = useSelector((state: RootState) => state);

    const formData = JSON.stringify(state);
    console.log(state);
    
    return (
        <div className="container">
            <div className="completed-card">
                <img src="completed.png" alt="" />
                <h3>Registration Completed</h3>
                <Link to={"/"}>Back to Home page</Link>
            </div>
      </div>
    );
}
