import Link from 'next/link';
import React from 'react';
import styled, { keyframes } from 'styled-components';

import Container from '../../styles/Container';

const AnimateLine = keyframes`
  from {
        width: 0;
  }
  to {
        width: 100%;
  }
`;

const Header = styled.header`
    height: 150px;
    color: #fff;
    background: #000;
`;

const Navigation = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 0 10px;
`;

const UnderLine = styled.div`
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    border-bottom: 2px solid #fff;
    display: none;
`;

const TitleLink = styled.a`
    position: relative;
    color: #fff;
    font-size: 36px;
    text-decoration: none;
    cursor: pointer;

    &:hover ${UnderLine} {
        display: block;
        animation: ${AnimateLine} 1s 1;
    }
`;

const NewBlogBtn = styled.button`
    background: #000;
    border: 2px solid #fff;
    border-radius: 15px;
    cursor: pointer;

    &:hover {
        background: #fff;
    }

    &:hover a {
        color: #000;
    }

    & a {
        display: block;
        padding: 10px 15px;
        color: #fff;
        font-size: 16px;
        font-weight: 400;
        text-decoration: none;
    }
`;

type BtnCreated = {
    isCreatedBtn: boolean;
};

const HeaderMenu: React.FC<BtnCreated> = ({ isCreatedBtn }) => {
    return (
        <>
            <Header>
                <Container>
                    <Navigation>
                        <Link href={'/'}>
                            <TitleLink>
                                BLOG
                                <UnderLine />
                            </TitleLink>
                        </Link>
                        {isCreatedBtn && (
                            <NewBlogBtn>
                                <Link href={'/posts/new'}>
                                    <a>Create a new post</a>
                                </Link>
                            </NewBlogBtn>
                        )}
                    </Navigation>
                </Container>
            </Header>
        </>
    );
};

export default HeaderMenu;
