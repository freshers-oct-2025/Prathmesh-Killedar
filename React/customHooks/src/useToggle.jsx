import { useState } from "react";

const useToggle = (defaultVal) => {
  const [value, setValue] = useState(defaultVal);

  const toggalValue = (val) => {
    if (typeof val != "boolean") {
      setValue(!value);
    } else {
      setValue(val);
    }
  };
  return [value, toggalValue];
};

export default useToggle;
