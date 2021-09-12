import { useState } from "react";
import { app, container } from "./App.module.css";
import Switch from "./components/Switch/Switch";
import Card from "./components/Card/Card";

function App() {
  const monthlyPlans = [
    {
      id: 1,
      plan: "basic",
      price: 19.99,
      space: 0.5,
      users: 2,
      size: 3,
      type: "secondaryCard",
    },
    {
      id: 2,
      plan: "professional",
      price: 24.99,
      space: 1,
      users: 5,
      size: 10,
      type: "primaryCard",
    },
    {
      id: 3,
      plan: "master",
      price: 39.99,
      space: 2,
      users: 10,
      size: 20,
      type: "secondaryCard",
    },
  ];

  const annualPlans = [
    {
      id: 5,
      plan: "basic",
      price: 186.45,
      space: 6,
      users: 24,
      size: 36,
      type: "secondaryCard",
    },
    {
      id: 6,
      plan: "professional",
      price: 229.1,
      space: 12,
      users: 60,
      size: 80,
      type: "primaryCard",
    },
    {
      id: 7,
      plan: "master",
      price: 379.75,
      space: 24,
      users: 90,
      size: 96,
      type: "secondaryCard",
    },
  ];

  const [pricing, setPricing] = useState(monthlyPlans);

  const handleSwitch = () => {
    setPricing(pricing === monthlyPlans ? annualPlans : monthlyPlans);
  };

  return (
    <div className={app}>
      <Switch handler={handleSwitch} />
      <div className={container}>
        {pricing.map((plan) => {
          return <Card data={plan} key={plan.id} />;
        })}
      </div>
    </div>
  );
}

export default App;
