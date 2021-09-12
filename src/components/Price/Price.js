import { price, primary, secondary } from "./Price.module.css";

const Price = ({ children, info }) => {
  return (
    <h2
      className={`${price} ${info === "primaryCard" ? secondary : primary} }`}
    >
      <span>$</span>
      {children}
    </h2>
  );
};

export default Price;
