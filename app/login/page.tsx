import connectMongo from '@/app/lib/db'
import Header from '@/app/components/Header';
import Login from '@/app/components/Login';

export default async function Page() {
  await connectMongo();

  return (
    <>
      <Header></Header>
      <Login />
    </>
  )
}