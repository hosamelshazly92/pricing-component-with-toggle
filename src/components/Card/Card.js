import { card, primaryCard, secondaryCard } from "./Card.module.css";
import Row from "../Row/Row";
import Button from "../Button/Button";
import Price from "../Price/Price";
import Plan from "../Plan/Plan";

const Card = ({ data }) => {
  const { plan, price, space, users, size, type } = data;

  return (
    <div
      className={`${card} ${
        type === "primaryCard" ? primaryCard : secondaryCard
      }`}
    >
      <Plan info={type}>{plan}</Plan>
      <Price info={type}>{price}</Price>
      <Row info={type}>{space} TB Storage</Row>
      <Row info={type}>{users} Allowed Users</Row>
      <Row info={type}>Send up to {size} GB</Row>
      <Button info={type}>Learn More</Button>
    </div>
  );
};

export default Card;
