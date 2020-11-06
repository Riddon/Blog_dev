import axios from 'axios';
import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

import PostsList from '../components/DataDisplay/PostsList';
import HeaderMenu from '../components/Layouts/HeaderMenu';
import { MyPost } from '../interfaces/MyPost';

interface PostsPage {
    data: MyPost[];
}

const Index: NextPage<PostsPage> = ({ data: serverData }) => {
    return (
        <>
            <Head>
                <title>BLOG</title>
            </Head>

            <HeaderMenu isCreatedBtn={true} />

            <main>
                <PostsList data={serverData} />
            </main>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    // Fetch data from external API
    const res = await axios(`https://simple-blog-api.crew.red/posts`);
    const data = await res.data;
    return { props: { data } };
};

export default Index;
