import { button, primaryBtn, secondaryBtn } from "./Button.module.css";

const Button = ({ children, info }) => {
  return (
    <div
      className={`${button} ${
        info === "primaryCard" ? secondaryBtn : primaryBtn
      }`}
    >
      <span>{children}</span>
    </div>
  );
};

export default Button;
