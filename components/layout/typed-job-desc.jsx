import Typed from "typed.js";
import { useEffect, useRef } from "react";

const TypedJobDesc = () => {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);
  // Create reference to store the Typed instance itself
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Web", "React", "C#"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return <span className="text-lg font-bold text-indigo-600" ref={el} />;
};

export default TypedJobDesc;
