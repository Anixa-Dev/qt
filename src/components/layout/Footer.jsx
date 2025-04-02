'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { colors } from '@/themes/default'
import { CounterTenDesktopHeaderLogo } from '@/assets';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import SocialMediaLinks from './SocialMediaLinks';

const FooterContainer = styled(Box)(({ theme }) => ({
    backgroundColor: colors.footerGray,
    padding: '40px 13%',
    bottom: '0',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
        padding: '32px',
    },
    [theme.breakpoints.down('xs')]: {
        display: 'block',
        padding: '20px',
    },
}));

const LogoContainer = styled(Box)({
    display: 'inline-flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
});

const StyledImage = styled(Image)(({ theme }) => ({
    height: '40px',
    mixBlendMode: 'screen',
    [theme.breakpoints.down('md')]: {
        height: '30px',
    },
}));

export default function Footer() {
    return (
        <FooterContainer>
            <LogoContainer>
                <Link href='https://app.counterten.com/login'>
                    <StyledImage
                        src={CounterTenDesktopHeaderLogo}
                        alt="logo"
                        width={120}
                        height={40}
                        priority
                    />
                </Link>
                <SocialMediaLinks />
            </LogoContainer>
        </FooterContainer>
    )
}