import React from "react"; // react module, a prerequisite for react hooks
import { useEffect, useState } from "react"; // react hooks to manage state
import { useRef } from "react"; // react hook to create a reference to datepicker DOM node
import Pikaday from "pikaday"; // Pikaday class component from pikaday library
import "pikaday/css/pikaday.css"; // Pikaday styling for the datepicker

/**
 * Simple Pikaday-library-based datepicker
 * wrapped in a react component
 * for use in React projects
 */

function DatePicker({
  onChange, // necessary props to recuperate the date for the parent component
  id = "datepicker-react-lib", // optional props to set the id of the datepicker
  format = "MM/DD/YYYY", // optional props to specify the format of the date
}) {
  const datepickerRef = useRef(); // useRef() to create an object with a .current property
  const [date, setDate] = useState("");
  function updateDate(date) {
    setDate(date); // update date state
    onChange(date); // call parent function
  }

  useEffect(() => {
    const datepicker = new Pikaday({
      field: datepickerRef.current, // Pikaday class requires the DOM reference
      format: format, // optional date format string
      onSelect: function () {
        // function is triggered user selects a date
        const currentDate = this.getMoment().format(format); // recuperate the date at the specified format
        updateDate(currentDate);
      },
    });

    return () => datepicker.destroy(); // destroy Pikaday instance when component unmounts
  }, [onChange, format]);

  return (
    <input
      type="text"
      id={id}
      ref={datepickerRef}
      value={date}
      onChange={(e) => updateDate(e.target.value)}
    />
  );
}

export default DatePicker;
