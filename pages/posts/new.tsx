import { NextPage } from 'next';
import Head from 'next/head';

import PostForm from '../../components/DataEntry/PostForm';
import HeaderMenu from '../../components/Layouts/HeaderMenu';
import Container from '../../styles/Container';

const NewPost: NextPage = () => {
    return (
        <>
            <Head>
                <title>BLOG: Create new POST</title>
            </Head>

            <HeaderMenu isCreatedBtn={false} />

            <Container>
                <PostForm />
            </Container>
        </>
    );
};

export default NewPost;
