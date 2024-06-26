import React, { useEffect, useRef, useState } from "react";
import Pikaday from "pikaday";
import "pikaday/css/pikaday.css";

function Test() {
  const [date, setDate] = useState("");
  const datepickerRef = useRef();

  useEffect(() => {
    const datepicker = new Pikaday({
      field: datepickerRef.current,
      onSelect: function () {
        const currentDate = this.getMoment().format("MM/DD/YYYY");
        setDate(currentDate);
      },
    });

    return () => datepicker.destroy();
  }, []);

  return <input type="text" ref={datepickerRef} value={date} readOnly />;
}

export default Test;
