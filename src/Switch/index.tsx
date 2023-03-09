import "./Styles.css";
import { ThemeContextType, useTheme } from "../ThemeContext";

const Switch = () => {
  const { theme, toggleTheme } = useTheme() as ThemeContextType;
  const isThemeLight = theme === "light";

  const onChange = () => {
    toggleTheme(isThemeLight ? "dark" : "light");
  };

  return (
    <label className='switch'>
      <input type='checkbox' checked={isThemeLight} onChange={onChange} />
      <span className='slider round' />
    </label>
  );
};

export default Switch;
