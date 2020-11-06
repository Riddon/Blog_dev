import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

import { MyPost } from '../../interfaces/MyPost';

const ListItem = styled.li`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin: 10px;
    padding: 30px;
    background: #f3f3f3;
    border: 1px solid #000;
    border-radius: 15px;
`;

const ListItemTitle = styled.h2`
    margin: 30px 0;
    font-size: 24px;
    font-weight: 700;
    text-align: center;
`;

const ListItemContent = styled.p`
    padding: 30px 0;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    text-align: justify;
`;

const ListItemButton = styled.button`
    width: 120px;
    margin: 20px 0;
    background: #fff;
    border: 2px solid #000;
    border-radius: 15px;
    cursor: pointer;

    &:hover {
        background: #000;
    }

    &:hover a {
        color: #fff;
    }

    & a {
        display: block;
        padding: 10px 15px;
        color: #000;
        font-size: 16px;
        font-weight: 400;
        text-decoration: none;
    }
`;

const PostItem: React.FC<MyPost> = ({ id, title, body }) => {
    return (
        <>
            <ListItem>
                <ListItemTitle>{title}</ListItemTitle>

                <ListItemContent>{body}</ListItemContent>

                <ListItemButton>
                    <Link href={`/posts/${id}`}>
                        <a>See more</a>
                    </Link>
                </ListItemButton>
            </ListItem>
        </>
    );
};

export default PostItem;
