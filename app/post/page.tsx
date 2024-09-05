import connectMongo from '@/app/lib/db'
import Header from '@/app/components/Header';
import CategoryNavigation from '@/app/components/CategoryNavigation';
import PostList from '@/app/components/PostList';
import Space from '@/app/components/Space';

export default async function Page() {
  await connectMongo();

  return (
    <>
      <Header />
      <Space />
      <div className='relative max-w-screen-xl px-4 py-10 mx-auto md:flex md:flex-row md:py-10'>
        <CategoryNavigation></CategoryNavigation>
        <PostList></PostList>
      </div>
    </>
  )
}