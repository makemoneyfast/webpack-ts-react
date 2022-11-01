import React, { ChangeEventHandler, useEffect, useRef, useState } from "react";

export const ControlledInput = (props: {
  value: string;
  onChange: (e: string) => void;
}) => {
  const { value, onChange, ...rest } = props;
  const [cursor, setCursor] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const input = ref.current;
    if (input) input.setSelectionRange(cursor, cursor);
  }, [ref, cursor, value]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setCursor(e.target.selectionStart);
    onChange && onChange(e.target.value);
  };

  return <input ref={ref} value={value} onChange={handleChange} {...rest} />;
};
