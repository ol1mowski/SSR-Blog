function page({ params }: { params: { postId: string } }) {
  return (
    <main>
      <h1>{params.postId}</h1>
    </main>
  );
}

export default page;
