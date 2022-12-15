import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import style from "../FormComponent/Form.module.css";
export default function Form({ onBoardSizeClick }) {
  const getBoardSize = (event) => {
    let boardSize = event.target.value;
    onBoardSizeClick(boardSize);
  };
  return (
    <div className={style.formContiner}>
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">
          Selcet Board Size
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            onClick={getBoardSize}
            value="10"
            control={<Radio />}
            label="10X10"
          />
          <FormControlLabel
            onClick={getBoardSize}
            value="11"
            control={<Radio />}
            label="11X11"
          />
          <FormControlLabel
            onClick={getBoardSize}
            value="12"
            control={<Radio />}
            label="12X12"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
