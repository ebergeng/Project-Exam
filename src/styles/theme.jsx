import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";

const theme = {
  color: {
    primary: "var(--color-primary)",
    secondary: "var(--color-secondary)",
  },
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme;
