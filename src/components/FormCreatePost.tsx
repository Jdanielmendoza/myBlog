import { put } from "@vercel/blob";

const { url } = await put('articles/blob.txt', 'Hello World!', { access: 'public' });
const FormCreatePost = () => {

    return (
        <div>FormCreatePost</div>
    )
}

export default FormCreatePost