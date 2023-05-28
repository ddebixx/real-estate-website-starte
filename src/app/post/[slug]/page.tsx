import React from "react";
import Image from "next/image";
import { getPost } from "../../features/landing-page/utils/getPost";
import styles from "../../styles/posts-page/Post.module.scss"

export default async function PostPage({
    params,
}: {
    params: { slug: string };
}) {

    const { post } = await getPost(params.slug);

    return (
        <>
            <div className={styles.post_container}>
                <h1 className={styles.post_header}>{post.post.postTitle}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.post.postContent.html }}></div>
                <div className={`${styles.author} flex gap-4 items-center self-start`}>
                    <Image src={post.post.author.authorPhoto.url} alt="" width="1000" height="1000" className={styles.avatar} />
                    <div className={styles.info}>
                        <p className="text-black/90 text-md">{post.post.author.authorName}</p>
                        <p className="text-black/60 text-sm">{post.post.postPublishDate}</p>
                    </div>
                </div>
            </div>
        </>
    )
}