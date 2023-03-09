import * as React from "react";
import "./styles.css";

type RadioGroupProps = {
  onChange: React.Dispatch<React.SetStateAction<string>>;
  selected: string;
  children: React.ReactNode;
};

// checked & onChange not explicitly passed on App.tsx so we make it optional with ?
type RadioOptionProps = {
  value: string;
  checked?: boolean;
  onChange?: React.Dispatch<React.SetStateAction<string>>;
  children: React.ReactNode;
};

// onChange={setSelected} selected={selected}
export const RadioGroup = ({
  onChange,
  selected,
  children,
}: RadioGroupProps) => {
  // Use React.Children.map and React.cloneElement to clone the children
  // and pass the correct props to each RadioOption
  const RadioOptions = React.Children.map(children, (child) => {
    return React.cloneElement(child as React.ReactElement<RadioOptionProps>, {
      onChange,
      checked:
        (child as React.ReactElement<RadioOptionProps>).props.value ===
        selected,
    });
  });

  return <div className='RadioGroup'>{RadioOptions}</div>;
};

export const RadioOption = ({
  value,
  checked,
  onChange,
  children,
}: RadioOptionProps) => {
  return (
    <div className='RadioOption'>
      <input
        id={value}
        type='radio'
        name={value}
        value={value}
        checked={checked}
        onChange={(e) => {
          if (onChange) {
            onChange(e.target.value);
          }
        }}
      />
      <label htmlFor={value}>{children}</label>
    </div>
  );
};
