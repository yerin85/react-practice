import { Button } from '@mui/material';
import { useRouter } from "next/router";
import { useState } from "react";

interface MainStateType  {
    mainCount: number;
    mainText: string;
}

const Main = () => {
    const [count, SetCount] = useState<number>(0);
    const [text, SetText] = useState<string>('');
    const [mainState, SetMainState] = useState<MainStateType>(
        {
            mainCount: 0,
            mainText: ''
        }
    )

    const router = useRouter();

    // const changeCount = (e) => {
    //     // const name = e.target.name;
    //     // SetCount(name === "btnPlus" ? count + 1 : count - 1);

    //     const {name, value} = e.target;
    //     const count = name === "btnPlus" ? mainState.mainCount+1 : mainState.mainCount-1;
    //     SetMainState({...mainState, mainCount: count}); // 여러 개 있을 때는 둘 다 넣어줘야 함
    //     // ...~ 원래 값을 넣어준다는 뜻
    // }


    // useEffect(() => {
    //     SetText(`${count}숫자 변경`);
    // }, [count])

    // useEffect(() => {
    //     SetMainState({...mainState,mainText: `${mainState.mainCount}숫자가 변경.`})
    // }, [mainState])

    

    return (
        <>
            {/* <Box
                component="main"
                sx={{
                    flexGrow: 1,
                }}

            >
                <Button name="btnPlus" onClick={(e) => changeCount(e)}> + </Button>
                <Button name="btnMinus" onClick={(e) => changeCount(e)}> - </Button>
                <Button onClick={() => router.push("/login")}> 로그인 </Button>
                <Box>{count}</Box>
                <Typography>{text}</Typography>
                <Box>{mainState.mainCount}</Box>
                <Typography>{mainState.mainText}</Typography>
            </Box> */}
            
            <Button onClick={() => router.push("/calculator")}> 계산기 </Button>

        </>
    );
}

export default Main;
