import { useRouter } from 'next/router';
const user = () => {
  const router =  useRouter();
  const { id, ...rest } = router.query;
  return (
    <>
      <h2>User ID = {id}</h2>
    </>
  )
}

export default user
