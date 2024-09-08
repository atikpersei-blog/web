import Link from 'next/link';

import { v4 as uuidv4 } from 'uuid';

import { Post } from '@/app/lib/modules/Post';

export default async function PostList({
  className,
  categoryName,
  posts,
}: {
  className?: string;
  categoryName: string;
  posts: Post[];
}) {
  return (
    <nav className={className}>
      <div>
        <span className='text-lg font-bold'>{categoryName} 게시글</span>
      </div>
      {posts.map((post) => {
        return (
          <div key={uuidv4()}>
            <Link href={`/post/${post._id}`}>{post.title}</Link>
          </div>
        );
      })}
    </nav>
  );
}
