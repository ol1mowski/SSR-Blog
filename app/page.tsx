import Category from "@/Components/Category/Category.component";
import Footer from "@/Components/Footer/Footer.component";
import LatestVideo from "@/Components/LatestVideo/LatestVideo.component";
import MainComponent from "@/Components/Homepage/Homepage.component";
import PostsList from "@/Components/Posts/PostList.component";
import LastPosts from "@/Components/LastPosts/LastPosts.component";

function page() {
  return (
    <>
      <MainComponent />
      <LatestVideo />
      <Category />
      <LastPosts />
      <PostsList />
      <Footer />
    </>
  );
}

export default page;
