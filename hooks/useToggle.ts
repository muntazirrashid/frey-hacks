// importing react-hooks
import { useState } from "react";

// useToggle Hook
const useToggle = () => {
  const [isOpen, stimulateComponent] = useState<Boolean>(false);
  const Toggle = () => stimulateComponent(!isOpen);
  return [isOpen, Toggle];
};

export default useToggle;
