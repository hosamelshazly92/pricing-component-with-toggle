import { Fragment } from "react";
import {
  heading,
  container,
  text,
  switcher,
  slider,
} from "./Switch.module.css";

const Switch = () => {
  return (
    <Fragment>
      <h1 className={heading}>Our Pricing</h1>

      <div className={container}>
        <p className={text}>Annually</p>
        <label className={switcher}>
          <input type="checkbox" />
          <span className={slider}></span>
        </label>
        <p className={text}>Monthly</p>
      </div>
    </Fragment>
  );
};

export default Switch;
