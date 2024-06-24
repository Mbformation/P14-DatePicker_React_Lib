import React, { useEffect, useRef } from "react";
import Pikaday from "pikaday";

function DatePicker({ onSelect }) {
  const datepickerRef = useRef();
  useEffect(() => {
    const datepicker = new Pikaday({
      field: datepickerRef.current,
      onSelect,
      format: "D MMM YYYY",
    });
    datepicker.setDate("2023-01-01");

    return () => datepicker.destroy(); // fermer le datepicker sinon boucle infinie
  }, [onSelect]);

  return <input type="text" ref={datepickerRef} readOnly />;
}

export default DatePicker;
