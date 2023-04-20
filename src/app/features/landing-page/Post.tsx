import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getPosts } from './utils/getPosts';

export const Post = async () => {

    const { posts } = await getPosts()

    return (
        <>
            <div>
                {posts.posts.map(post =>
                    <div dangerouslySetInnerHTML={{__html: post.postContent.html}}></div>
                )}
            </div>
        </>
    )
}