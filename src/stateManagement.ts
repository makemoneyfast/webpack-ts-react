export interface IState {
  day: string;
  month: string;
  year: string;
}

export type FieldId = "d" | "m" | "y";

interface IChangeAction {
  type: "change";
  payload: { field: FieldId; value: string };
}

export type Action = IChangeAction;

export const createInitialState = () =>
  ({
    day: "",
    month: "",
    year: "",
  } as IState);

export const reducer: (state: IState, action: Action) => IState = (
  state: IState,
  action: Action
) => {
  console.log("reduce", action);
  switch (action.type) {
    case "change":
      console.log("change!");
      switch (action.payload.field) {
        case "d":
          return { ...state, day: action.payload.value };
        case "m":
          return { ...state, month: action.payload.value };
        case "y":
          return { ...state, year: action.payload.value };
      }
  }
};
