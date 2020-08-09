import React from "react";
import ReactSelect from "react-select";
import { Props as ReactSelectProps } from "react-select/src/Select";

import { DefaultOption } from "utils/types";

import "./SearchSelect.scss";

type Props<DefaultOption> = {
  label?: string;
  selectProps: ReactSelectProps<DefaultOption>;
  error?: string;
  styleProps?: object;
};

export const Select: React.FC<Props<DefaultOption>> = ({ selectProps, label, error }) => {
  return (
    <div className={`Select-Wrapper ${error ? "Select-Wrapper-Error" : ""}`} >
      {label && <div className="Select-Label" data-testid="label-select" >{label}</div>}
      <ReactSelect<DefaultOption>
        classNamePrefix="react-select"
        className="Search-Select"
        {...selectProps}
      />
      {!!error ? <span className="Select-Error" data-testid={"Select-Error"}> {error} </span> : null}
    </div>
  );
}