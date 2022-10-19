import {styled} from "@mui/material/styles";
import {Box} from "@mui/material";
import {CommonNavbar} from "@components/common/common-navbar";
import {CommonFooter} from "@components/common/common-footer";

const CommonLayoutRoot = styled('div')(({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%'
}));

export const CommonLayout = (props) => {
    const { children } = props;

    return (
        <>
            <CommonNavbar />
            <CommonLayoutRoot>
                <Box
                    sx={{
                        display: 'flex',
                        flex: '1 1 auto',
                        flexDirection: 'column',
                        width: '100%'
                    }}
                >
                    {children}
                </Box>
            </CommonLayoutRoot>
            <CommonFooter />
        </>
    )
}
