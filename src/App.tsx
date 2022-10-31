import React from "react";
import { useReducer } from "react";
import { createInitialState, FieldId, reducer } from "./stateManagement";
import { DateControl } from "./dateControl";

export const App = () => {
  const [state, dispatch] = useReducer(reducer, createInitialState());
  return (
    <DateControl
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
  );
};
