import React, { useEffect, useRef } from "react";
import Pikaday from "pikaday";

function DatePicker() {
  const datepickerRef = useRef();

  useEffect(() => {
    new Pikaday({ field: datepickerRef.current });
  }, []);

  return <input type="text" ref={datepickerRef} />;
}

export default DatePicker;
