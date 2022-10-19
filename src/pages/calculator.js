import { Box, Button, Input } from '@mui/material';
import { useState } from "react";

const Calculator = () => {
  const [text, SetText] = useState('');

  const setValue = (e) => {
    const {name, value} = e.target;
    const prevText = text;

    if(name === "oper"){
      if(prevText.length > 0 && !"+-/*".includes(prevText.charAt(prevText.length-1))){
        SetText(prevText+value);
      }
      return;
    }
    SetText(prevText+value);
  }

  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
      }}
      >
        <Input value={text}></Input>
            <Box>
            <Button name="num" value = "1" onClick={(e)=> setValue(e)}>1</Button>
            <Button name="num" value = "2" onClick={(e)=> setValue(e)}>2</Button>
            <Button name="num" value = "3" onClick={(e)=> setValue(e)}>3</Button>
            <Button name="oper" value = "+" onClick={(e)=> setValue(e)}>+</Button>
            </Box>
            <Box>
            <Button name="num" value = "4" onClick={(e)=> setValue(e)}>4</Button>
            <Button name="num" value = "5" onClick={(e)=> setValue(e)}>5</Button>
            <Button name="num" value = "6" onClick={(e)=> setValue(e)}>6</Button>
            <Button name="oper" value = "-" onClick={(e)=> setValue(e)}>-</Button>
            </Box>
            <Box>
            <Button name="num" value = "7" onClick={(e)=> setValue(e)}>7</Button>
            <Button name="num" value = "8" onClick={(e)=> setValue(e)}>8</Button>
            <Button name="num" value = "9" onClick={(e)=> setValue(e)}>9</Button>
            <Button name="oper" value = "*" onClick={(e)=> setValue(e)}>*</Button>
            </Box>
            <Box>
            <Button onClick={()=> SetText('')}>C</Button>
            <Button name="num" value = "0" onClick={(e)=> setValue(e)}>0</Button>
            <Button onClick={()=> SetText(String(eval(text)))}>=</Button>
            <Button name="oper" value = "/" onClick={(e)=> setValue(e)}>/</Button>
            </Box>
      </Box>
    </>
  );
};

export default Calculator;
