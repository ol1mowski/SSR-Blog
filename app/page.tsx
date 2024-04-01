import Category from "@/Components/Category/Category.component";
import Footer from "@/Components/Footer/Footer.component";
import LatestVideo from "@/Components/LatestVideo/LatestVideo.component";
import MainComponent from "@/Components/Homepage/Homepage.component";
import PostsList from "@/Components/Posts/PostList.component";

function page() {
  return (
    <>
      <MainComponent />
      <Category />
      <LatestVideo />
      <PostsList />
      <Footer />
    </>
  );
}

export default page;
