import {Box, IconButton, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {useEffect, useState} from "react";
import ArrowIcon from '@icons/arrow_left.svg';

const HighlightWrap = styled(Box)(
    ({ theme }) => ({
        position: 'relative',
        /*display: 'flex',*/
        '& .swiper': {
            width: '100%',
            height: '100%'
        },
        '& .swiper-slide': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '& img': {
                display: 'block',
                width: '100%',
                height: '100%',
                objectFit: 'cover'
            }
        }

    })
)

const HighlightItem = styled(Box)(
    ({ theme }) => ({
        position: 'relative',
        '& .img-filter': {
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            position: 'absolute',
            top: 0,
            width: '100%',
            height: '100%'
        }
    })
)

const HighlightContent = styled(Box)(
    ({ theme }) => ({
        position: 'absolute',
        top: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 ' + theme.layout.pxToWidthRatio(315),
        width: '100%',
        height: '100%',
        zIndex: 10,
        color: theme.colors.white,
        gap: theme.layout.pxToWidthRatio(60)
    })
)

const HighlightNavBar = styled(Box)(
    ({ theme }) => ({
        position: 'absolute',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        top: '50%',
        zIndex: 11,
        padding: '0 ' + theme.layout.pxToWidthRatio(50)
    })
)

const HighlightPagination = styled(Box)(
    ({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        gap: theme.layout.pxToWidthRatio(30),
        '& .progress': {
            width: theme.layout.pxToWidthRatio(200),
            height: '2px',
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            '& .progress-bar': {
                height: '2px',
                backgroundColor: theme.colors.white
            }
        },
        '& .page-number': {
            display: 'flex',
            gap: '5px',
            alignItems: 'flex-end',
            '& .MuiTypography-root': {
                lineHeight: 'normal',
            },
            '& .page-current': {
                fontSize: theme.typography.pxToRem(20)
            },
            '& .page-total': {
                fontSize: theme.typography.pxToRem(13)
            }
        }
    })
)

const SwiperPrevButton = () => {
    const swiper = useSwiper();
    return <IconButton onClick={() => swiper.slidePrev()}><ArrowIcon /></IconButton>
}

const SwiperNextButton = () => {
    const swiper = useSwiper();
    return <IconButton onClick={() => swiper.slideNext()}><ArrowIcon style={{ transform: "scaleX(-1)" }} /></IconButton>
}

type HighlightType = {
    id: number;
    image: string;
    title: string;
    subTitle: string;
    content: string;
    url: string;
}

const tempHighlightData: HighlightType[] = [
    {
        id: 0,
        image: '/static/images/sample_main.png',
        title: 'Room Package',
        subTitle: 'Special Open Promotion',
        content: '땅의 끝, 바다가 시작이 되는 그 극적인 접점에서 귀하가 누려야 할 그 누구에게도 방해받지 않는 길이 있는 휴식이 지금 시작됩니다.',
        url: ''
    },
    {
        id: 1,
        image: '/static/images/auth.jpeg',
        title: 'Room Package',
        subTitle: 'Special Open Promotion',
        content: '땅의 끝, 바다가 시작이 되는 그 극적인 접점에서 귀하가 누려야 할 그 누구에게도 방해받지 않는 길이 있는 휴식이 지금 시작됩니다.',
        url: ''
    },
    {
        id: 2,
        image: '/static/images/sample_main.png',
        title: 'Room Package',
        subTitle: 'Special Open Promotion',
        content: '땅의 끝, 바다가 시작이 되는 그 극적인 접점에서 귀하가 누려야 할 그 누구에게도 방해받지 않는 길이 있는 휴식이 지금 시작됩니다.',
        url: ''
    }
]

const MainHighlight = () => {

    const [highlightList, setHighlightList] = useState<HighlightType[]>([]);
    const [selectIndex, setSelectIndex] = useState<number>(0);

    useEffect(() => {
        setHighlightList(tempHighlightData);
    }, [])

    const getNumber = (num: number) => {
        return num < 10 ? '0' + num : num;
    }

    const onInit = (swiper) => {
        console.log(swiper);
    }

    const onSlide = (swiper) => {
        setSelectIndex(swiper.realIndex);
    }

    return (
        <HighlightWrap>
            {highlightList.length > 0 &&
                <Swiper
                    onInit={onInit}
                    onSlideChange={onSlide}
                    loop
                >
                    {highlightList.map((item, index) => (
                        <SwiperSlide key={index}>
                            <HighlightItem>
                                <Box
                                    component={'img'}
                                    src={item.image}
                                    loading="lazy"
                                />
                                <Box className={'img-filter'}/>
                            </HighlightItem>
                        </SwiperSlide>
                    ))}
                    <HighlightContent>
                        <Box>
                            <Typography>{highlightList[selectIndex].subTitle}</Typography>
                            <Typography variant={'h1'}>{highlightList[selectIndex].title}</Typography>
                            <Typography>{highlightList[selectIndex].content}</Typography>
                        </Box>
                        <HighlightPagination>
                            <Box className={'progress'}>
                                <Box className={'progress-bar'}/>
                            </Box>
                            <Box className={'page-number'}>
                                <Typography className={'page-current'}>{getNumber(selectIndex + 1)}</Typography>/<Typography className={'page-total'}>{getNumber(highlightList.length)}</Typography>
                            </Box>
                        </HighlightPagination>
                    </HighlightContent>
                    <HighlightNavBar>
                        <SwiperPrevButton />
                        <SwiperNextButton />
                    </HighlightNavBar>
                </Swiper>
            }
        </HighlightWrap>
    )
}

export default MainHighlight;
