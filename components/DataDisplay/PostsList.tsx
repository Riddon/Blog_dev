import React from 'react';
import styled from 'styled-components';

import { MyPost } from '../../interfaces/MyPost';
import Container from '../../styles/Container';
import PostItem from './PostItem';

const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 2vw;
    padding-top: 30px;
`;

interface PostsPage {
    data: MyPost[];
}

const PostsList: React.FC<PostsPage> = ({ data }) => {
    const dataList = data.map((item, i) => {
        return <PostItem key={i} id={item.id} title={item.title} body={item.body} />;
    });

    return (
        <>
            <Container>
                <List>{dataList}</List>
            </Container>
        </>
    );
};

export default PostsList;
