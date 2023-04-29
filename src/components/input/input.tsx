import { RefObject, useEffect, useRef } from "react";
import { StyledInput } from "./input-styles";

type TInput = {
  value: string;
  setValue: Function;
  placeholder: string;
  type: string;
  focus?: boolean;
}

export const Input = ({
  value,
  setValue,
  placeholder,
  type,
  focus=false,
}: TInput) => {

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
      focus && inputRef?.current?.focus();
  }, [])

  return(
    <StyledInput
      value={value}
      onChange={e => setValue(e.target.value)}
      placeholder={placeholder}
      type={type}
      ref={inputRef}
    />
  );
}