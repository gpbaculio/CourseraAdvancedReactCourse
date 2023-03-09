import { ReactNode } from "react";

import "./App.css";
import { ThemeContextType, ThemeProvider, useTheme } from "./ThemeContext";
import Switch from "./Switch";

type TitleProps = { children: ReactNode };
const Title = ({ children }: TitleProps) => {
  const { theme } = useTheme() as ThemeContextType;
  return (
    <h2
      style={{
        color: theme === "light" ? "black" : "white",
      }}>
      {children}
    </h2>
  );
};

type ParagraphProps = { children: ReactNode };
const Paragraph = ({ children }: ParagraphProps) => {
  const { theme } = useTheme() as ThemeContextType;
  return (
    <p
      style={{
        color: theme === "light" ? "black" : "white",
      }}>
      {children}
    </p>
  );
};

const Content = () => {
  return (
    <div>
      <Paragraph>
        We are a pizza loving family. And for years, I searched and searched and
        searched for the perfect pizza dough recipe. I tried dozens, or more.
        And while some were good, none of them were that recipe that would make
        me stop trying all of the others.
      </Paragraph>
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <Title>Little Lemon 🍕</Title>
      <Switch />
    </header>
  );
};

const Page = () => {
  return (
    <div className='Page'>
      <Title>When it comes to dough</Title>
      <Content />
    </div>
  );
};

function App() {
  const { theme } = useTheme() as ThemeContextType;
  return (
    <div
      className='App'
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
      }}>
      <Header />
      <Page />
    </div>
  );
}

function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export default Root;
