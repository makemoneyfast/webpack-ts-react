import React from "react";
import { useRef, useState, useEffect } from "react";
import { FieldId } from "./stateManagement";
import { BorderlessInput } from "./styledComponents";
import "./style.css";

// We can't overflow because we don't have the cursor position.
// If the field contains 11 and now it contains 111 where was the
// new '1' inserted? No way to know.

interface IDateControlProps {
  day: string;
  month: string;
  year: string;
  onChange: (fieldId: FieldId, value: string) => void;
  onBulkChange: (day: string, month: string, year: string) => void;
}

export const DateControlWithNumbers = (props: IDateControlProps) => {
  const { day, month, year } = props;
  const dayRef = useRef<HTMLInputElement>(null);
  const monthRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  console.log(`DateControl ${day}:${month}:${props.year}`);
  return (
    <div
      ref={containerRef}
      onBlur={(e) => {
        e.stopPropagation();
        containerRef.current?.classList?.add("unfocussedBox");
        containerRef.current?.classList?.remove("focussedBox");
      }}
    >
      <label htmlFor={`DD`} className="visually-hidden">
        DD
      </label>
      <BorderlessInput
        width={2.1}
        className={"unfocussedBox"}
        type="number"
        ref={dayRef}
        value={day}
        pattern="[0-9]*"
        min="1"
        max="31"
        id="DD"
        onChange={(e) => {
          let valueToWrite = e.target.value;

          if (valueToWrite.length >= 2) {
            valueToWrite = Math.min(
              Math.max(parseInt(valueToWrite), 1),
              31
            ).toString();
          }

          props.onChange("d", valueToWrite);
        }}
        onFocus={(e) => {
          containerRef.current?.classList?.remove("unfocussedBox");
          containerRef.current?.classList?.add("focussedBox");
        }}
      />
      /
      <BorderlessInput
        width={2.1}
        className={"unfocussedBox"}
        type="number"
        ref={monthRef}
        value={month}
        pattern="[0-9]*"
        min="1"
        max="12"
        onChange={(e) => {
          let valueToWrite = e.target.value;

          if (valueToWrite.length >= 2) {
            valueToWrite = Math.min(
              Math.max(parseInt(valueToWrite), 1),
              12
            ).toString();
          }

          props.onChange("m", valueToWrite);
        }}
        onFocus={(e) => {
          containerRef.current?.classList?.remove("unfocussedBox");
          containerRef.current?.classList?.add("focussedBox");
        }}
      />
      /
      <BorderlessInput
        width={3.2}
        className={"unfocussedBox"}
        type="number"
        ref={yearRef}
        value={year}
        pattern="[0-9]*"
        min="0"
        max="2022"
        onChange={(e) => {
          let valueToWrite = e.target.value;

          if (valueToWrite.length >= 4) {
            valueToWrite = Math.min(
              Math.max(parseInt(valueToWrite), 1900),
              2022
            ).toString();
          }

          props.onChange("y", valueToWrite);
        }}
        onFocus={(e) => {
          containerRef.current?.classList?.remove("unfocussedBox");
          containerRef.current?.classList?.add("focussedBox");
        }}
      />
    </div>
  );
};
