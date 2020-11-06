import axios from 'axios';
import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

import PostOpenedItem from '../../components/DataDisplay/PostOpenedItem';
import HeaderMenu from '../../components/Layouts/HeaderMenu';
import { NewPost } from '../../interfaces/NewPost';
import Container from '../../styles/Container';

interface OnePost {
    data: NewPost;
}

const Post: NextPage<OnePost> = ({ data }) => {
    return (
        <>
            <Head>
                <title>{`BLOG: POST ===`}</title>
            </Head>

            <HeaderMenu isCreatedBtn={true} />

            <Container>
                <PostOpenedItem postData={data} />
            </Container>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const res = await axios(
        `https://simple-blog-api.crew.red/posts/${ctx.query.id}?_embed=comments`
    );
    const data: NewPost[] = await res.data;
    return { props: { data } };
};

export default Post;
