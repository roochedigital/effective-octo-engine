import { styled } from '@mui/material/styles'
import { Typography } from '@mui/material'


//ellipsis
export const CustomTypographyEllipsis = styled(Typography)(({ theme }) => ({
    color: theme.palette.neutral[1200],
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
}))

export const CustomTypographyGray = styled(Typography)(({ theme }) => ({
    color: theme.palette.neutral[500],
}))
export const CustomTypographyError = styled(Typography)(({ theme }) => ({
    color: theme.palette.error.main,
    fontSize: '.7rem !important',
    marginTop: '5px !important',
    marginLeft: '13px !important',
    fontWeight: '400 !important',
}))
export const CustomTypographyTag = styled(Typography)(({ theme }) => ({
    // position:"absolute",
    // fontWeight:"600",
    color: theme.palette.primary.main,
    // backgroundColor: theme.palette.primary.main,
    // padding: '5px',
    // borderRadius: '5px',
    textAlign: 'center',
    textTransform: 'capitalize',
    // marginLeft:"10px",
    //  marginTop: '3px',
    // [theme.breakpoints.down('sm')]: {
    //     fontSize: '12px',
    //     marginTop: '3px',
    // },
}))
export const CustomTypographyLabel = styled(Typography)(({ theme }) => ({
    textTransform: "capitalize",
    color: theme.palette.neutral[1000],
    fontSize: '14px',
    padding: 0,
    margin: 0,
    textAlign: 'center',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: '1',
    WebkitBoxOrient: 'vertical',
    [theme.breakpoints.down('sm')]: {
        fontSize: '12px',
    },
}))
