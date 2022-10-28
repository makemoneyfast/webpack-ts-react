import React from "react";
import { useRef } from "react";
import { FieldId } from "./stateManagement";

interface IDateControlProps {
  day: string;
  month: string;
  year: string;
  onChange: (fieldId: FieldId, value: string) => void;
}

export const DateControl = (props: IDateControlProps) => {
  const dayRef = useRef<HTMLInputElement>(null);
  const monthRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);

  const keyFilter: { [key: string]: boolean } = {
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
    Backspace: true,
    ArrowRight: true,
    ArrowLeft: true,
    Delete: true,
  };

  console.log(`Rerender d ${props.day} m ${props.month} y ${props.year}`);
  return (
    <div>
      <input
        type="text"
        ref={dayRef}
        value={props.day}
        onKeyUp={(e) => {
          //   if (e.key === "Backspace" && e.target.selectionStart === 0) {
          //   }
          //   monthRef.current?.focus();
        }}
        onChange={(e) =>
          props.onChange("d", e.target.value.replace(/\D/g, "").slice(0, 2))
        }
      />
      <input
        type="text"
        ref={monthRef}
        value={props.month}
        onKeyUp={(e) => {
          if (e.key === "Backspace" && e.target.selectionStart === 0) {
            dayRef.current?.focus();
            props.onChange("d", e.target.value.replace(/\D/g, "").slice(0, 1));
          }
          //yearRef.current?.focus();
        }}
        onChange={(e) =>
          props.onChange("m", e.target.value.replace(/\D/g, "").slice(0, 2))
        }
      />
      <input
        type="text"
        ref={yearRef}
        value={props.year}
        onKeyUp={(e) => {
          if (e.key === "Backspace" && e.target.selectionStart === 0) {
            monthRef.current?.focus();
            props.onChange("m", e.target.value.replace(/\D/g, "").slice(0, 1));
          }
          //dayRef.current?.focus();
        }}
        onChange={(e) =>
          props.onChange("y", e.target.value.replace(/\D/g, "").slice(0, 4))
        }
      />
    </div>
  );
};
