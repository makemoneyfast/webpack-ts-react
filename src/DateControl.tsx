import React from "react";
import { useRef, useState, useEffect } from "react";
import { FieldId } from "./stateManagement";
import { BorderlessInput } from "./styledComponents";

interface IDateControlProps {
  day: string;
  month: string;
  year: string;
  onChange: (fieldId: FieldId, value: string) => void;
  onBulkChange: (day: string, month: string, year: string) => void;
}

export const DateControl = (props: IDateControlProps) => {
  const { day, month, year } = props;
  const dayRef = useRef<HTMLInputElement>(null);
  const monthRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);
  const [cursor, setCursor] = useState<string>(null);

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

  useEffect(() => {
    if (cursor !== null) {
      const [field, positionAsString] = cursor?.split(":");
      const position = parseInt(positionAsString);
      console.log(`THE EFFECT: ${cursor}`);
      switch (field) {
        case "d":
          dayRef.current?.setSelectionRange(position, position);
          break;
        case "m":
          monthRef.current?.setSelectionRange(position, position);
          break;
        case "y":
          yearRef.current?.setSelectionRange(position, position);
          break;
      }
    }
  }, [cursor, day, month, year, dayRef, monthRef, yearRef]);

  console.log(`DateControl ${day}:${month}:${props.year}`);
  return (
    <div className={"focussedBox"}>
      <BorderlessInput
        width={1.1}
        type="text"
        ref={dayRef}
        value={day}
        onKeyUp={(e) => {
          console.log(
            `Day keypress. Key: ${e.key} Selection start: ${e.target.selectionStart} Field value ${e.target.value} Prop ${day}`
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
            setCursor(`m:1`);
          } else {
            setCursor(`d:${e.target.selectionStart}`);
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
        width={1.1}
        type="text"
        ref={monthRef}
        value={month}
        onKeyUp={(e) => {
          console.log(
            `Month keypress. Key: ${e.key} Selection start: ${e.target.selectionStart} Field value ${e.target.value} Prop ${month}`
          );
        }}
        onChange={(e) => {
          console.log("Month onchange");
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
            }
            newMonthValue = newMonthValue.slice(0, 2);
          }

          if (overflow) {
            yearRef.current?.focus();
            setCursor(`y:1`);
          } else {
            setCursor(`m:${e.target.selectionStart}`);
          }
          props.onBulkChange(newDayValue, newMonthValue, newYearValue);
        }}
      />
      /
      <BorderlessInput
        width={2.2}
        type="text"
        ref={yearRef}
        value={year}
        onKeyUp={(e) => {
          // if (e.key === "Backspace" && e.target.selectionStart === 0) {
          //   monthRef.current?.focus();
          //   props.onChange("m", e.target.value.replace(/\D/g, "").slice(0, 1));
          // }
          //dayRef.current?.focus();
        }}
        onChange={(e) => {
          const selectionStart = e.target.selectionStart;

          const rawValue = e.target.value;
          const constrainedValue = rawValue.replace(/\D/g, "").slice(0, 4);

          // if(rawValue !== constrainedValue) {

          // }

          setCursor(`y:${e.target.selectionStart}`);
          props.onBulkChange(
            day,
            month,
            e.target.value.replace(/\D/g, "").slice(0, 4)
          );
          // e.target.setSelectionRange(2, 2);
        }}
      />
    </div>
  );
};
