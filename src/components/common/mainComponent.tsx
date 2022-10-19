import { Box, Button, Typography } from "@mui/material"
import { forwardRef, useImperativeHandle, useState } from "react";

interface propsType {
    onClick: any, // function받을 때 any 많이 씀
    text: string
}

// 상위에서 받을 수 있게 ref 꼭 선언
// 하위
const MainComponent = ({onClick, text}:propsType, ref) => {
    const [testCount, SetTestCount] = useState<number>(0);
    
//상위에서 ref.getCount하면 여기 있는 값을 가져갈 수 있음
    const getCount = () => {
        SetTestCount(testCount+1)
        return testCount;
    }

    useImperativeHandle(ref, () => ({
        getCount
    }))

    return (
        <Box>
            <Button onClick={onClick}>버튼</Button>
            <Typography>{text}</Typography>
        </Box>
    )
}

export default forwardRef(MainComponent); // 내가 갖고 있는 데이터를 상위에 넘겨주는 것을 의미함