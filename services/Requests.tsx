import axios from 'axios';

interface PostRequest {
    title: string;
    body: string;
}

const options = {
    headers: { 'Content-Type': 'application/json' }
};

export const postRequestPOST = async (data: PostRequest): Promise<void> => {
    await axios
        .post(`https://simple-blog-api.crew.red/posts`, data, options)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
};
