# Getting Started with DatePicker React Lib

## Intro

DatePicker React Lib makes it easy for you to add a simple datepicker for your React projects.

This library is based on the [Pikaday Library](https://github.com/Pikaday/Pikaday).

## Prerequisites

Before you get started, this library has been tested with:

- Node.js (version 19.0.0)
- React (version 18.3.1)
- Visual Studio Code (recommended editor)

## How to install in your React project

In the project directory, you can run:

### `npm install datepicker-react-lib`

This will install the library for your project.

## How to use in your React project

Import the Datepicker component with:

### `import DatePicker from "datepicker-react-lib";`

This will import the Datepicker component for you project, be used declared as a standard React component
as follows: `<Datepicker />`

The Datepicker takes one necessary props: an onChange callback function with a variable as a parameter to
retrieve the date from the Datepicker component when a date is selected. It can be used in conjunction
with react's useState() hook as follows:

- `const [date, setDate] = useState("")
...
<DatePicker onChange={(value) => setDate(value)} />`

## Configuration options

Datepicker takes two further optional props:

- An `id` props which has a default value set to `id = "datepicker-react-lib"`.

- A `format` props where you can set the date format which has a default value set to `"MM/DD/YYYY"`
  For more information on format, you can read the formatting section of the [Pikaday Library](https://github.com/Pikaday/Pikaday).
