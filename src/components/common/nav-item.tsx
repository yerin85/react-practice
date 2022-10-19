
import Link from 'next/link';
import {useRouter} from 'next/router';
import {Button} from '@mui/material';
import React, {ReactNode} from "react";

type NavItemProps = {
    href: string;
    icon?: ReactNode;
    title: string;
    className?: string;
    target?: string;
}

export const NavItem = ({ href, icon = null, title, className = "", target, ...others}: NavItemProps) => {
    
    return (
        <Link
            href={href}
            passHref
        >
            <Button
                component="a"
                sx={{ padding: 0, minWidth: 'auto', whiteSpace: 'nowrap', color:'#FFFFFF' }}
                startIcon={icon}
                target={target}
                disableRipple
                className ={className}
            >
                {title}
            </Button>
        </Link>
    );
};

NavItem.defaultProps = {
    icon: null,
    className: "",
}
