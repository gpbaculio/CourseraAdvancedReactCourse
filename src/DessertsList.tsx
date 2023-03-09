import React from "react";
import { DessertType } from "./App";

type DessertsListProps = { data: DessertType[] };

const filterDataByCalories = ({ calories }: DessertType) => calories < 500;
const sortDataByCalories = (dessertA: DessertType, dessertB: DessertType) =>
  dessertA.calories - dessertB.calories;

function DessertsList({ data }: DessertsListProps) {
  // Implement the component here.
  const id = React.useId();

  const result = data.filter(filterDataByCalories).sort(sortDataByCalories);

  return (
    <ul>
      {result.map(({ name, calories }, index) => (
        <li key={`${index}-${id}`}>{`${name} - ${calories} cal`}</li>
      ))}
    </ul>
  );
}

export default DessertsList;
