"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/posts-page/Post.module.scss';
import { notFound, useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import { getPosts } from '../utils/getPosts';

const PostsPagination = dynamic(() => import("../posts-page/posts-pagination/PostsPagination"), {
    loading: () => <p>...</p>,
});

export const Posts = async () => {

    const searchParams = useSearchParams();
    const page = Number(searchParams.get('page') ?? 1);
    const { posts } = await getPosts(page)
    const pageCount = posts.postsConnection.aggregate.count / 2;
    const pathName = '/posts-page';

    if (!pageCount) {
        notFound();
    }

    return (
        <>
            <div className={styles.post_container}>
                {posts.posts.map(posts =>
                    <Link key={posts.id} href={`/post/${posts.postSlug}`}>
                        <div className={styles.card}>
                            <div className={`${styles.text} flex flex-col gap-2 ml-4 mb-4`}>
                                <h2 className="text-black text-xl m-0 max-md:max-w-[250px] max-md:overflow-hidden">{posts.postTitle}</h2>
                                <div dangerouslySetInnerHTML={{ __html: posts.postContent.html }} className="line-clamp-[7]"></div>
                            </div>
                            <div className={styles.author}>
                                <Image src={posts.author.authorPhoto.url} alt="" width="1000" height="1000" className={styles.avatar} />
                                <div className={styles.info}>
                                    <p className="text-black/90 text-md">{posts.author.authorName}</p>
                                    <p className="text-black/60 text-sm">{posts.postPublishDate}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                )}
            </div>
            <PostsPagination page={page} pageCount={pageCount} pathname={pathName} />
        </>
    )
}