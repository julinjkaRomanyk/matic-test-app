import React from "react";
import ReactSelect from "react-select";
import { Props as ReactSelectProps } from "react-select/src/Select";

import { DefaultOption } from "./../utils/types";

import "./SearchSelect.scss";

type Props<DefaultOption> = {
  label?: string;
  selectProps: ReactSelectProps<DefaultOption>;
  error?: string;
  styleProps?: object;
};

export const Select: React.FC<Props<DefaultOption>> = ({ selectProps, label }) => {
  return (
    <div className="Input-Wrapper">
      {label && <div className="Input-Label" data-testid="label-select" >{label}</div>}
      <ReactSelect<DefaultOption>
        classNamePrefix="react-select"
        className="Search-Select"
        {...selectProps}
      />
    </div>
  );
}