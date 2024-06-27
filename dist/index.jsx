'use strict';

var React = require('react');
var Pikaday = require('pikaday');
require('pikaday/css/pikaday.css');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var Pikaday__default = /*#__PURE__*/_interopDefaultLegacy(Pikaday);

function Test() {
  const [date, setDate] = React.useState("");
  const datepickerRef = React.useRef();
  React.useEffect(() => {
    const datepicker = new Pikaday__default["default"]({
      field: datepickerRef.current,
      onSelect: function () {
        const currentDate = this.getMoment().format("MM/DD/YYYY");
        setDate(currentDate);
      }
    });
    return () => datepicker.destroy();
  }, []);
  return /*#__PURE__*/React__default["default"].createElement("input", {
    type: "text",
    ref: datepickerRef,
    value: date,
    readOnly: true
  });
}

module.exports = Test;
