// importing react-hooks
import { useState } from "react";

// useToggle Hook
const useToggle = (initialState: Boolean) => {
  const [isOpen, stimulateComponent] = useState<Boolean>(initialState);
  const Toggle = () => stimulateComponent(!isOpen);
  return [isOpen, Toggle];
};

export default useToggle;
