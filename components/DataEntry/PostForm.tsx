import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styled from 'styled-components';

import { postRequestPOST } from '../../services/Requests';

const CreatedPostForm = styled.form`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    min-width: 300px;
    margin: 20px 10px;
    padding: 30px;
    background: #f3f3f3;
`;

const CreatedPostTitle = styled.label`
    display: flex;
    margin-bottom: 10px;
    font-size: 24px;
    font-weight: 700;
`;

const CreatedPostTitleInput = styled.input`
    box-sizing: border-box;
    display: inline-block;
    width: 100%;
    margin: 8px 0;
    padding: 12px 20px;
    font-family: 'Lato', sans-serif;
    font-size: 18px;
    font-weight: 400;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const CreatedPostTextArea = styled.textarea`
    box-sizing: border-box;
    width: 100%;
    height: 150px;
    margin-bottom: 10px;
    padding: 12px 20px;
    font-family: 'Lato', sans-serif;
    font-size: 18px;
    font-weight: 400;
    background-color: #f8f8f8;
    border: 2px solid #ccc;
    border-radius: 4px;
    resize: none;
`;

const CreatedPostButtonSubmit = styled.input`
    width: 100%;
    padding: 10px 15px;
    color: #000;
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    font-weight: 700;
    background: #fff;
    border: 2px solid #000;
    border-radius: 15px;
    cursor: pointer;

    &:hover {
        color: #fff;
        background: #000;
    }
`;

const ErrorField = styled.p`
    height: 30px;
    margin-bottom: 10px;
    color: #ff0000;
    font-size: 16px;
    font-weight: 700;
`;

const PostForm: React.FC = () => {
    const router = useRouter();
    const [newPost, setNewPost] = useState({
        title: '',
        body: ''
    });

    const [error, setError] = useState({
        field: '',
        message: ''
    });

    const handlerSubmit = async (event) => {
        event.preventDefault();

        if (!newPost.title) {
            setError({
                ...error,
                ...{
                    field: 'title',
                    message: 'This field should be filled'
                }
            });
            return false;
        }

        if (!newPost.body) {
            setError({
                ...error,
                ...{
                    field: 'postBody',
                    message: 'This field should be filled'
                }
            });
            return false;
        }

        await postRequestPOST(newPost);
        await router.push('/');
    };

    const handlerOnChange = (event) => {
        if (event.target.name === 'title') {
            setNewPost({ ...newPost, title: event.target.value });
            setError({
                field: '',
                message: ''
            });
        } else if (event.target.name === 'postBody') {
            setNewPost({ ...newPost, body: event.target.value });
            setError({
                field: '',
                message: ''
            });
        }
    };

    return (
        <CreatedPostForm onSubmit={handlerSubmit}>
            <CreatedPostTitle htmlFor="post-title">Post title:</CreatedPostTitle>

            <CreatedPostTitleInput
                id="post-title"
                name="title"
                type="text"
                placeholder="Post title"
                onChange={handlerOnChange}
            />

            <ErrorField>{error.field === 'title' && error.message}</ErrorField>

            <CreatedPostTitle htmlFor="post-body">Post text:</CreatedPostTitle>

            <CreatedPostTextArea name="postBody" id="post-body" onChange={handlerOnChange} />

            <ErrorField>{error.field === 'postBody' && error.message}</ErrorField>

            <CreatedPostButtonSubmit type="submit" value="Create post" />
        </CreatedPostForm>
    );
};

export default PostForm;
