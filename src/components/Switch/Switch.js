import { Fragment } from "react";
import { heading, container, text } from "./Switch.module.css";

const Switch = ({ handler }) => {
  return (
    <Fragment>
      <h1 className={heading}>Our Pricing</h1>

      <div className={container}>
        <p className={text}>Monthly</p>
        <div>
          <input onClick={handler} id="switch" type="checkbox" />
          <label htmlFor="switch">toggle</label>
        </div>
        <p className={text}>Annually</p>
      </div>
    </Fragment>
  );
};

export default Switch;
