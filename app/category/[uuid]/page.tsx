import { v4 as uuidv4 } from 'uuid';

import CategoryNavigation from '@/app/components/CategoryNavigation';
import Category from '@/app/lib/modules/Category';
import Post from '@/app/lib/modules/Post';
import connectMongo from '@/app/lib/db';
import Header from '@/app/components/Header';
import Space from '@/app/components/Space';
import PostList from '@/app/components/PostList';

interface PageParams {
  params: {
    uuid: string;
  };
}

export default async function Page({ params: { uuid } }: PageParams) {
  await connectMongo();

  const category = await Category.findOne({ _id: uuid });
  const posts = await Post.find({ status: 1, category: uuid });

  return (
    <>
      <Header />
      <Space />
      <div className='relative mx-auto max-w-screen-xl px-4 md:flex md:flex-row'>
        <CategoryNavigation />
        <PostList categoryName={category.name} posts={posts} />
      </div>
    </>
  );
}
