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
            <div className="min-h-[50vh] mx-auto max-w-[1200px] my-24">
                <Image src={post.post.author.authorPhoto.url} alt="" width={100} height={100}></Image>
                <h1>{post.post.postTitle}</h1>
            </div>
        </>
    )
}