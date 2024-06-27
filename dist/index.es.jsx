import React, { useState, useRef, useEffect } from 'react';
import Pikaday from 'pikaday';
import 'pikaday/css/pikaday.css';

function Test() {
  const [date, setDate] = useState("");
  const datepickerRef = useRef();
  useEffect(() => {
    const datepicker = new Pikaday({
      field: datepickerRef.current,
      onSelect: function () {
        const currentDate = this.getMoment().format("MM/DD/YYYY");
        setDate(currentDate);
      }
    });
    return () => datepicker.destroy();
  }, []);
  return /*#__PURE__*/React.createElement("input", {
    type: "text",
    ref: datepickerRef,
    value: date,
    readOnly: true
  });
}

export { Test as default };
