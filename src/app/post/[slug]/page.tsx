import React from "react";
import Image from "next/image";
import { getPost } from "../../features/landing-page/utils/getPost";

export default async function PostPage({
    params,
}: {
    params: { slug: string };
}) {

    const { post } = await getPost(params.slug);

    return (
        <>
            <div>
                <Image src={post.post.author.authorPhoto.url} alt="" width={100} height={100}></Image>
                asdasdasdasdasdasdasasdas
            </div>
        </>
    )
}