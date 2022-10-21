import MainComponent from '@components/common/mainComponent';
import ChartContainer from '@components/kendo/chartContainer';
import ChartContainer2 from '@components/kendo/chartContainer2';
import ChartContainer3 from '@components/kendo/chartContainer3';
import ChartContainer4 from '@components/kendo/chartContainer4';
import ChartContainer5 from '@components/kendo/chartContainer5';
import { Box, Button, Typography } from '@mui/material';
import { getMainData } from '@services/api/authApi';
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

interface MainStateType {
    mainCount: number;
    mainText: string;
}

const Main = () => {
    // const [count, SetCount] = useState<number>(0);
    // const [text, SetText] = useState<string>('');
    const [showNum, setShowNum] = useState<string>('1');

    const [mainState, SetMainState] = useState<MainStateType>(
        {
            mainCount: 0,
            mainText: ''
        }
    )
    const mainComponetRef = useRef(null);
    const router = useRouter();

    const changeCount = (e) => {
        // const name = e.target.name;
        // SetCount(name === "btnPlus" ? count + 1 : count - 1);

        const { name, value } = e.target;
        const count = name === "btnPlus" ? mainState.mainCount + 1 : mainState.mainCount - 1;
        SetMainState({ ...mainState, mainCount: count }); // 여러 개 있을 때는 둘 다 넣어줘야 함
        // ...~ 원래 값을 넣어준다는 뜻
    }


    // useEffect(() => {
    //     SetText(`${count}숫자 변경`);
    // }, [count])

    // useEffect(() => {
    //     SetMainState({...mainState,mainText: `${mainState.mainCount}숫자가 변경.`})
    // }, [mainState])

    const buttonClick = () => {
        console.log("click")
        console.log(mainComponetRef.current.getCount())
    }

    // useEffect(()=>{
    //     getMainData('123')
    //     .then((res)=>{
    //         console.log(res)
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     })
    //     .finally()

    // }, [])

    const changeChart = (e) => {
        const value = e.target.value;
        setShowNum(value);
    }

    return (
        <>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                }}
            >
                <Box>
                    <Button value="1" onClick={changeChart}> 막대그래프 </Button>
                    <Button value="2" onClick={changeChart}> 꺽은선 그래프 </Button>
                    <Button value="3" onClick={changeChart}> 혼합 그래프 </Button>
                    <Button value="4" onClick={changeChart}> 테스트 </Button>
                    <Button value="5" onClick={changeChart}> panes </Button>
                    <Button onClick={() => router.push("/calculator")}> 계산기 </Button>
                </Box>
                {showNum === '1' && <ChartContainer />}
                {showNum === '2' && <ChartContainer2 />}
                {showNum === '3' && <ChartContainer3 />}
                {showNum === '4' && <ChartContainer4 />}
                {showNum === '5' && <ChartContainer5 />}
                {/* 하위 컴포넌트로 데이터를 전달 */}
                {/* <MainComponent onClick={buttonClick} text={'111'}></MainComponent> */}

                {/* 상위 컴포넌트에서 데이터 받음 */}
                {/* <MainComponent onClick={buttonClick} text={'111'} ref={mainComponetRef}/> */}


                {/* <Button name="btnPlus" onClick={(e) => changeCount(e)}> + </Button>
                <Button name="btnMinus" onClick={(e) => changeCount(e)}> - </Button>
                <Button onClick={() => router.push("/login")}> 로그인 </Button>
                <Box>{count}</Box>
                <Typography>{text}</Typography>
                <Box>{mainState.mainCount}</Box>
                <Typography>{mainState.mainText}</Typography> */}
            </Box>
        </>
    );
}

export default Main;

// react query 스피너...같은거.. 쓸 때 써도 ㄷ됨
// 엑셀데이터가 크니까 위에거처럼 써도 보기 좋을듯ㅇㅅㅇ
// 근데 최신버전에만 됨! 이전 버전에서는 리덕스에서 상태값 확인하면서 했었음ㅁ