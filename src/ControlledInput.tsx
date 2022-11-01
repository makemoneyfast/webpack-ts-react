import React, { ChangeEventHandler, useEffect, useRef, useState } from "react";

export const ControlledInput = (props: {
  value: string;
  onChange: (e: string) => void;
}) => {
  const { value, onChange, ...rest } = props;
  const [cursor, setCursor] = useState<number>(null);
  const ref = useRef(null);

  useEffect(() => {
    console.log(">>", cursor, value);
    const input = ref.current;
    // restore cursor position after render, if cursor, input value or input control have changed.
    if (input) input.setSelectionRange(cursor, cursor);
  }, [ref, cursor, value]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    // Set cursor position onChange...
    setCursor(e.target.selectionStart);
    onChange && onChange(e.target.value);
  };

  return <input ref={ref} value={value} onChange={handleChange} {...rest} />;
};
