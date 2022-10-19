import {Box} from "@mui/material";
import {styled} from "@mui/material/styles";
import {NavItem} from "@components/common/nav-item";
import {SearchTwoTone} from "@mui/icons-material";
import LanguageIcon from '@mui/icons-material/Language';
import {useEffect, useState} from "react";

interface CommonNavbarRootProp {
    isScrolled: boolean;
}

const CommonNavbarRoot = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'isScrolled',
})<CommonNavbarRootProp>(({isScrolled, theme}) => ({
        position: 'fixed',
        width: '100%',
        zIndex: 9999,
        display: 'flex',
        height: 100,
        alignItems: 'center',
        padding: theme.layout.pxToWidthRatio(60),
        justifyContent: 'space-between',
        backgroundColor: isScrolled ? theme.header.background : 'transparent',
        color: theme.header.textColor
    })
);

const CommonNavbarItem = styled(Box)(
    ({theme}) => ({
        display: 'flex',
        gap: theme.layout.pxToWidthRatio(70),
        '& .MuiListItem-root': {
            padding: 0,
            margin: 0,
            '& a': {
                padding: 0,
                lineHeight: 'normal',
                backgroundColor: 'transparent',
                '& .MuiSvgIcon-root': {
                    color: theme.header.textColor
                },
                '& div': {
                    fontWeight: 400,
                    fontSize: theme.typography.pxToRem(14),
                    color: theme.header.textColor,
                    whiteSpace: 'nowrap',
                    flexGrow: 0
                }
            }
        }
    })
)

const items = [
    {
        href: '/',
        title: 'BLUE WINGS'
    },
    {
        href: '/menu/offer/account',
        title: 'OFFER'
    },
    {
        href: '/menu/offer/account',
        title: 'ROOMS'
    },
    {
        href: '/menu/offer/account',
        title: 'DINING'
    },
    {
        href: '/menu/offer/account',
        title: 'WEDDING & CONVENTION'
    },
    {
        href: '/menu/offer/account',
        title: 'FACILITIES'
    }
];

export const CommonNavbar = (props) => {
    const {...other} = props;
    
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    
    useEffect(() => {
        window.addEventListener('scroll', scrollHandler, true);
        return window.removeEventListener('scroll', scrollHandler);
    })
    
    const scrollHandler = () => {
        if (window.scrollY > 10) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    }
    
    return (
        <>
            <CommonNavbarRoot {...other} isScrolled={isScrolled}>
                <CommonNavbarItem>
                    {items.map((item) => (
                        <NavItem
                            key={item.title}
                            href={item.href}
                            title={item.title}
                        />
                    ))}
                    <NavItem
                        href={'/reservation'}
                        title={'RESERVATION'}
                    />
                </CommonNavbarItem>
                <CommonNavbarItem sx={{gap: '2vw'}}>
                    <NavItem
                        icon={<SearchTwoTone/>}
                        href={'/search'}
                        title={'예약조회'}
                    />
                    <NavItem
                        icon={<LanguageIcon/>}
                        href={'/translation'}
                        title={'한국어'}
                    />
                </CommonNavbarItem>
            </CommonNavbarRoot>
        </>
    );
}
