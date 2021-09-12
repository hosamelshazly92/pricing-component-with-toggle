import { container, text, primary, secondary } from "./Row.module.css";

const Row = ({ children, info }) => {
  return (
    <div className={container}>
      <p
        className={`${text} ${info === "primaryCard" ? secondary : primary} }`}
      >
        {children}
      </p>
    </div>
  );
};

export default Row;
