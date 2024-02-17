import styled from "styled-components";

/**
 * A styled button for the `CtaButton` component that defines style based on the `type` prop.
 * Supports three types: "primary", "secondary", and "accent". Defaults to "gray" if no type is specified.
 *
 * @prop {string} type - Determines the button's background color. Can be "primary", "secondary", "accent", or others for the default gray color.
 */

const Button = styled.button`
  width: 100%;
  height: 42px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  background-color: ${(props) => {
    switch (props.type) {
      case "primary":
        return "#52A49A";
      case "secondary":
        return "#003366";
      case "accent":
        return "#E87B7B";
      default:
        return "gray";
    }
  }};
  border-radius: 10px;
  border: none;
  box-shadow: var(--box-shadow);
  cursor: pointer;
`;

/**
 * A Call-to-Action (CTA) button component that can be used for various user interface actions.
 * It supports customization through props for different visual representations and behavior.
 *
 * @component
 * @example
 * <CtaButton type="primary" onClick={() => console.log('Clicked!')}>Click Me</CtaButton>
 *
 * @param {Object} props - Props for the CTA button component.
 * @param {string} props.type - The type of the button which influences the button's styling. Can be "primary", "secondary", "accent", or others.
 * @param {React.ReactNode} props.children - The content inside the button, usually text or icons.
 * @param {Function} props.onClick - The function to call when the button is clicked.
 * @returns {React.ReactElement} A styled button element based on the provided props.
 */

const CtaButton = ({ type, children, onClick }) => {
  return (
    <Button type={type} onClick={onClick}>
      {children}
    </Button>
  );
};

export default CtaButton;
