import React from "react";
import { useRef } from "react";
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
          // console.log(
          //   `Month keypress. Key: ${e.key} Selection start: ${e.target.selectionStart} Field value ${e.target.value}`
          // );
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
          console.log(
            `Day onchange fires, props: ${props.day}:${props.month}:${props.year}, field: ${e.target.value}`
          );

          let newDayValue = e.target.value.replace(/\D/g, "");
          let newMonthValue: string = props.month;
          let newYearValue: string = props.year;
          let overflow = false;
          const currentFieldContent = props.day;

          console.log(">>", dayRef.current?.selectionStart);
          const selectionStart = dayRef.current?.selectionStart;

          if (newDayValue.length === 3) {
            if (props.month.length === 0) {
              //push the character into the next field and focus it? Can we?
              newMonthValue = newDayValue.slice(2);
              overflow = true;
            }
            newDayValue = newDayValue.slice(0, 2);
          }

          console.log(
            `dispatching ${newDayValue}:${newMonthValue}:${newYearValue}`
          );

          if (selectionStart === 3 && overflow) {
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
          // console.log(
          //   `Month keypress. Key: ${e.key} Selection start: ${e.target.selectionStart} Field value ${e.target.value}`
          // );
        }}
        onChange={(e) => {
          console.log(
            `Month onchange fires, props: ${props.day}:${props.month}:${props.year}, field: ${e.target.value}`
          );

          let newDayValue: string = props.day;
          let newMonthValue: string = e.target.value.replace(/\D/g, "");
          let newYearValue: string = props.year;
          let overflow = false;
          const currentFieldContent = props.month;

          console.log("++", dayRef.current?.selectionStart);
          const selectionStart = monthRef.current?.selectionStart;

          if (newMonthValue.length === 3) {
            if (props.year.length === 0) {
              newYearValue = newMonthValue.slice(2);
              overflow = true;
            }
            newMonthValue = newMonthValue.slice(0, 2);
          }

          console.log(
            `dispatching ${newDayValue}:${newMonthValue}:${newYearValue}`
          );

          if (selectionStart === 3 && overflow) {
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
