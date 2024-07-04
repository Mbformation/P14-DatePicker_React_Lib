import React, { useEffect, useRef, useState } from "react";
import Pikaday from "pikaday";
import "pikaday/css/pikaday.css";

function DatePicker({ onChange }) {
  const datepickerRef = useRef();
  const [date, setDate] = useState("");

  useEffect(() => {
    const datepicker = new Pikaday({
      field: datepickerRef.current,
      format: "MM/DD/YYYY",
      onSelect: function () {
        const currentDate = this.getMoment().format("MM/DD/YYYY");
        setDate(currentDate);
        onChange(currentDate);
      },
    });

    return () => datepicker.destroy();
  }, [onChange]);

  return <input type="text" ref={datepickerRef} value={date} readOnly />;
}

export default DatePicker;
