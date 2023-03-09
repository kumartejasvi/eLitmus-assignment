import React from "react";
import classes from "./Form.module.css";

const Form = () => {
  return (
    <div className={classes.login}>
      <div className={classes.wrapper}>
        <div className={classes.loginleft}>
          <h3 className={classes.loginlogo}>eLITMUS</h3>
          <span className={classes.logindesc}>
            Best proctored examination platform
          </span>
        </div>
        <div className={classes.loginright}>
          <div className={classes.loginbox}>
            <input
              type="text"
              className={classes.logininput}
              placeholder="Name"
            />
            <input
              type="email"
              className={classes.logininput}
              placeholder="Email"
            />
            <input
              type="text"
              className={classes.logininput}
              placeholder="Invitation Code"
            />

            <button className={classes.loginbutton}>Start Test</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
