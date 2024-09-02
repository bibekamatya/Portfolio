import { SVGProps } from "react";
import { JSX } from "react/jsx-runtime";

// In your SVG file, ensure it's correctly exported
const SvgComponent = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => <svg {...props}>{/* SVG content */}</svg>;
export default SvgComponent;
