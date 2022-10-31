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

  const updateEverything = (d: string, m: string, y: string) => {
    props.onBulkChange(d, m, y);
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
          const buffer = `${e.target.value.replace(/\D/g, "")}${props.month}${
            props.year
          }`.slice(0, 8);
          props.onBulkChange(
            buffer.slice(0, 2),
            buffer.slice(2, 4),
            buffer.slice(4, 8)
          );
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
          const buffer = `${props.day}${e.target.value.replace(/\D/g, "")}${
            props.year
          }`.slice(0, 8);
          props.onBulkChange(
            buffer.slice(0, 2),
            buffer.slice(2, 4),
            buffer.slice(4, 8)
          );
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
          const buffer = `${props.day}${props.month}${e.target.value.replace(
            /\D/g,
            ""
          )}`.slice(0, 8);
          props.onBulkChange(
            buffer.slice(0, 2),
            buffer.slice(2, 4),
            buffer.slice(4, 8)
          );
        }}
      />
    </div>
  );
};
