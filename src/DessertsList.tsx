import React from "react";
import { DessertType } from "./App";

type DessertsListProps = { data: DessertType[] };

function DessertsList({ data }: DessertsListProps) {
  // Implement the component here.
  const id = React.useId();

  return (
    <ul>
      {data.map(({ name, calories }, index) => (
        <li key={`${index}-${id}`}>{`${name} - ${calories} cal`}</li>
      ))}
    </ul>
  );
}

export default DessertsList;
