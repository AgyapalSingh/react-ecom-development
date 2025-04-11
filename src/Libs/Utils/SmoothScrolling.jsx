import { ReactLenis } from "lenis/react";
function SmoothScrolling({ children }) {
  return (
    <ReactLenis root options={{ lerp: 0.5, duration: 2, syncTouch: true }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
