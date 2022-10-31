import React from "react";
import { useRef, useState } from "react";
import { FieldId } from "./stateManagement";

interface IDateControlProps {
  day: string;
  month: string;
  year: string;
  onChange: (fieldId: FieldId, value: string) => void;
  onBulkChange: (day: string, month: string, year: string) => void;
}

export const DateControl = (props: IDateControlProps) => {
  const dayRef = useRef<HTMLInputElement>(null);
  const monthRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);

  const [monthDeletion, setMonthDeletion] = useState(false);

  const numericKeyFilter: { [key: string]: boolean } = {
    "0": true,
    "1": true,
    "2": true,
    "3": true,
    "4": true,
    "5": true,
    "6": true,
    "7": true,
    "8": true,
    "9": true,
  };

  console.log(`DateControl ${props.day}:${props.month}:${props.year}`);
  return (
    <div>
      <input
        type="text"
        ref={dayRef}
        value={props.day}
        onKeyUp={(e) => {
          console.log(
            `Day keypress. Key: ${e.key} Selection start: ${e.target.selectionStart} Field value ${e.target.value} Prop ${props.day}`
          );
          // if (
          //   numericKeyFilter[e.key] &&
          //   e.target.selectionStart === 2 &&
          //   props.month.length < 2
          // ) {
          //   monthRef.current?.focus();
          //   monthRef.current?.setSelectionRange(0, 0);
          //   props.onChange("m", e.key + props.month);
          // }
          //   if (e.key === "Backspace" && e.target.selectionStart === 0) {
          //   }
          //   monthRef.current?.focus();
        }}
        onChange={(e) => {
          let newDayValue = e.target.value.replace(/\D/g, "");
          let newMonthValue: string = props.month;
          let newYearValue: string = props.year;
          let overflow = false;
          const selectionStart = dayRef.current?.selectionStart;

          if (newDayValue.length === 3) {
            // we've exceeded the input field length.
            if (props.month.length === 0 && selectionStart === 3) {
              // If the next field is empty and we're typing excess characters
              // at the end of this field, the overflow character goes into the
              // next field.
              newMonthValue = newDayValue.slice(2);
              overflow = true;
            }
            // Trim the content to fit the field.
            newDayValue = newDayValue.slice(0, 2);
          }

          if (overflow) {
            // Send keyboard focus to the overflow field if input text has
            // overflowed.
            monthRef.current?.focus();
          }
          props.onBulkChange(newDayValue, newMonthValue, newYearValue);
        }}
      />
      <input
        type="text"
        ref={monthRef}
        value={props.month}
        onKeyUp={(e) => {
          console.log(
            `Month keypress. Key: ${e.key} Selection start: ${e.target.selectionStart} Field value ${e.target.value} Prop ${props.month}`
          );
        }}
        onChange={(e) => {
          console.log("Month onchange");
          let newDayValue: string = props.day;
          let newMonthValue: string = e.target.value.replace(/\D/g, "");
          let newYearValue: string = props.year;
          let overflow = false;

          const selectionStart = monthRef.current?.selectionStart;

          // See similar logic in day field onChange handler.
          if (newMonthValue.length === 3) {
            if (props.year.length === 0 && selectionStart === 3) {
              newYearValue = newMonthValue.slice(2);
              overflow = true;
            }
            newMonthValue = newMonthValue.slice(0, 2);
          }

          if (overflow) {
            yearRef.current?.focus();
          }
          props.onBulkChange(newDayValue, newMonthValue, newYearValue);
        }}
      />
      <input
        type="text"
        ref={yearRef}
        value={props.year}
        onKeyUp={(e) => {
          // if (e.key === "Backspace" && e.target.selectionStart === 0) {
          //   monthRef.current?.focus();
          //   props.onChange("m", e.target.value.replace(/\D/g, "").slice(0, 1));
          // }
          //dayRef.current?.focus();
        }}
        onChange={(e) => {
          props.onBulkChange(
            props.day,
            props.month,
            e.target.value.replace(/\D/g, "").slice(0, 4)
          );
        }}
      />
    </div>
  );
};
