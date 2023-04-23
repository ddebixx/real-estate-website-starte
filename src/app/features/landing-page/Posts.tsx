import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getPosts } from './utils/getPosts';
import styles from '../../styles/landing-page/Post.module.scss';

export const Posts = async () => {

    const { posts } = await getPosts()

    return (
        <>
            <h2 className={styles.posts_header}>Цікаві дописи:</h2>
            <div className={styles.post_container}>
                {posts.posts.map(posts =>
                    <Link key={posts.id} href={`/post/${posts.postSlug}`}>
                        <div  className={styles.card}>
                            <div className={`${styles.text}
                    flex
                    flex-col
                    gap-2
                    ml-4
                    mb-4`}>
                                <h2 className="text-black
                        text-xl
                        m-0
                        
                        max-md:max-w-[250px]
                        max-md:overflow-hidden">{posts.postTitle}</h2>
                                <div dangerouslySetInnerHTML={{ __html: posts.postContent.html }}></div>

                            </div>
                            <div className={`${styles.author} 
                        flex
                        gap-4
                        items-center`}>
                                <Image src={posts.author.authorPhoto.url} alt="" width="1000" height="1000" className={styles.avatar} />
                                <div className={styles.info}>
                                    <p className="text-black/90
                                text-md">{posts.author.authorName}</p>
                                    <p className="text-black/60
                                text-sm">{posts.postPublishDate}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                )}
            </div>
        </>
    )
}