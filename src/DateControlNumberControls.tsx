import React from "react";
import { useRef, useState, useEffect } from "react";
import { FieldId } from "./stateManagement";
import styled from "styled-components";

interface IDateControlProps {
  day: string;
  month: string;
  year: string;
  onChange: (fieldId: FieldId, value: string) => void;
  onBulkChange: (day: string, month: string, year: string) => void;
}

const BorderlessInput = styled.input`
  border-width: 0;
`;

export const DateControlWithNumbers = (props: IDateControlProps) => {
  const { day, month, year } = props;
  const dayRef = useRef<HTMLInputElement>(null);
  const monthRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);

  console.log(`DateControl ${day}:${month}:${props.year}`);
  return (
    <div>
      <BorderlessInput
        type="number"
        ref={dayRef}
        value={day}
        pattern="[0-9]*"
        min="1"
        max="31"
        onKeyUp={(e) => {
          console.log(
            `Day keypress. Key: ${e.key} Field value ${e.target.value} Prop ${day}`
          );
          // if (
          //   numericKeyFilter[e.key] &&
          //   e.target.selectionStart === 2 &&
          //   month.length < 2
          // ) {
          //   monthRef.current?.focus();
          //   monthRef.current?.setSelectionRange(0, 0);
          //   props.onChange("m", e.key + month);
          // }
          //   if (e.key === "Backspace" && e.target.selectionStart === 0) {
          //   }
          //   monthRef.current?.focus();
        }}
        onChange={(e) => {
          console.log(`Day change value is ${e.target.value}`);
          let newDayValue = e.target.value.replace(/\D/g, "");
          let newMonthValue: string = month;
          let newYearValue: string = year;
          let overflow = false;
          let trimmed = false;
          const selectionStart = dayRef.current?.selectionStart;

          if (newDayValue.length === 3) {
            // we've exceeded the input field length.
            if (month.length === 0 && selectionStart === 3) {
              // If the next field is empty and we're typing excess characters
              // at the end of this field, the overflow character goes into the
              // next field.
              newMonthValue = newDayValue.slice(2);
              overflow = true;
            }
            // Trim the content to fit the field.
            newDayValue = newDayValue.slice(0, 2);
            trimmed = true;
          }

          if (overflow) {
            // Send keyboard focus to the overflow field if input text has
            // overflowed.
            monthRef.current?.focus();
          }
          // if (trimmed) {
          //   dayRef.current?.setSelectionRange(
          //     selectionStart + 1,
          //     selectionStart + 1
          //   );
          // }
          props.onBulkChange(newDayValue, newMonthValue, newYearValue);
        }}
      />
      /
      <BorderlessInput
        type="number"
        ref={monthRef}
        value={month}
        pattern="[0-9]*"
        min="1"
        max="12"
        onKeyUp={(e) => {
          console.log(
            `Month keypress. Key: ${e.key} Field value ${e.target.value} Prop ${month}`
          );
        }}
        onChange={(e) => {
          console.log(`Month change value is ${e.target.value}`);
          let newDayValue: string = day;
          let newMonthValue: string = e.target.value.replace(/\D/g, "");
          let newYearValue: string = year;
          let overflow = false;

          const selectionStart = monthRef.current?.selectionStart;

          // See similar logic in day field onChange handler.
          if (newMonthValue.length === 3) {
            if (year.length === 0 && selectionStart === 3) {
              newYearValue = newMonthValue.slice(2);
              overflow = true;
              console.log("overflow!! in month");
            }
            newMonthValue = newMonthValue.slice(0, 2);
          }

          if (overflow) {
            console.log("Trying to focus YearRef");
            yearRef.current?.focus();
          }
          props.onBulkChange(newDayValue, newMonthValue, newYearValue);
        }}
      />
      /
      <BorderlessInput
        type="number"
        ref={yearRef}
        value={year}
        pattern="[0-9]*"
        min="0"
        max="2022"
        onChange={(e) => {
          const rawValue = e.target.value;
          console.log(`Year change value is ${rawValue}`);

          let valueToWrite = e.target.value;

          if (valueToWrite.length >= 4) {
            const aa = parseInt(rawValue);
            valueToWrite = Math.min(Math.max(aa, 1900), 2022).toString();
          }

          props.onBulkChange(day, month, valueToWrite);
          // e.target.setSelectionRange(2, 2);
        }}
      />
    </div>
  );
};
