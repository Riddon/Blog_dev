import React from 'react';
import styled from 'styled-components';

import { NewPost } from '../../interfaces/NewPost';
import { PostComment } from '../../interfaces/PostComment';

const OpenedItem = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    min-width: 300px;
    margin: 20px 10px;
    padding: 0 30px;
    background: #f3f3f3;
`;

const OpenedItemTitle = styled.h2`
    padding: 30px 0;
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    border-bottom: 1px solid #000;
`;

const OpenedItemContent = styled.p`
    padding: 30px 0;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    text-align: justify;
    border-bottom: 1px solid #000;
`;

const OpenedItemComments = styled.div`
    padding: 20px 0;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    text-align: justify;
`;

const OpenedItemCommentsTitle = styled.h2`
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
`;

const OpenedItemCommentList = styled.ul`
    display: flex;
    flex-direction: column;
`;

const OpenedItemCommentItem = styled.li`
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
`;

interface BlogPostData {
    postData: NewPost;
}

const PostOpenedItem: React.FC<BlogPostData> = ({ postData }) => {
    return (
        <>
            <OpenedItem>
                <OpenedItemTitle>{postData.title}</OpenedItemTitle>

                <OpenedItemContent>{postData.body}</OpenedItemContent>

                <OpenedItemComments>
                    <OpenedItemCommentsTitle>Comments</OpenedItemCommentsTitle>

                    <OpenedItemCommentList>
                        {postData.comments.length > 0
                            ? postData.comments.map((item: PostComment) => (
                                  <OpenedItemCommentItem key={item.id}>
                                      {item.body}
                                  </OpenedItemCommentItem>
                              ))
                            : ''}
                    </OpenedItemCommentList>
                </OpenedItemComments>
            </OpenedItem>
        </>
    );
};
export default PostOpenedItem;
