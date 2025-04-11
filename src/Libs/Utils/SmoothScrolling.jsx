import { ReactLenis } from "lenis/react";
function SmoothScrolling({ children }) {
  return (
    <ReactLenis root options={{ lerp: 0.5, duration: 2 }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
