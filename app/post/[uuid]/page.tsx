import Header from '@/app/components/Header';
import Space from '@/app/components/Space';
import CategoryNavigation from '@/app/components/CategoryNavigation';
import MdxRenderer from '@/app/components/MdxRenderer';
import TocNavigation from '@/app/components/TocNavigation';

import Post from '@/app/lib/modules/Post';

interface PageParams {
  params: {
    uuid: string;
  };
}

export default async function Page({ params: { uuid } }: PageParams) {
  const post = await Post.findOne({ _id: uuid });
  const markdown = post.content;

  return (
    <>
      <Header />
      <Space />
      <div className='relative max-w-screen-xl px-4 mx-auto md:flex md:flex-row'>
        <CategoryNavigation />
        <MdxRenderer className='flex-grow' markdown={markdown} />
        <TocNavigation className='max-lg:hidden' markdown={markdown} />
      </div>
    </>
  )
}