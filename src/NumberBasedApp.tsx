import React from "react";
import { useReducer } from "react";
import { createInitialState, FieldId, reducer } from "./stateManagement";
import { DateControlWithNumbers } from "./DateControlNumberControls";
import { ControlledInput } from "./ControlledInput";

export const NumberBasedApp = () => {
  const [state, dispatch] = useReducer(reducer, createInitialState());
  return (
    <div>
      <h3>Number-based implementation</h3>
      <DateControlWithNumbers
        day={state.day}
        month={state.month}
        year={state.year}
        onChange={(field: FieldId, value: string) =>
          dispatch({ type: "change", payload: { value, field } })
        }
        onBulkChange={(day: string, month: string, year: string) =>
          dispatch({ type: "bulkChange", payload: { day, month, year } })
        }
      />
      <hr></hr>
    </div>
  );
};
