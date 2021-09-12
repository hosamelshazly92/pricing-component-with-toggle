import { Fragment } from "react";
import {
  heading,
  container,
  text,
  switcher,
  slider,
} from "./Switch.module.css";

const Switch = ({ handler }) => {
  return (
    <Fragment>
      <h1 className={heading}>Our Pricing</h1>

      <div className={container}>
        <p className={text}>Monthly</p>
        <label className={switcher}>
          <input type="checkbox" />
          <span onClick={handler} className={slider}></span>
        </label>
        <p className={text}>Annually</p>
      </div>
    </Fragment>
  );
};

export default Switch;
