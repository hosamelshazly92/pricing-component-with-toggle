import { plan, primary, secondary } from "./Plan.module.css";

const Plan = ({ children, info }) => {
  return (
    <h4 className={`${plan} ${info === "primaryCard" ? secondary : primary} }`}>
      {children}
    </h4>
  );
};

export default Plan;
