import Category from "@/Components/Category/Category.component";
import Footer from "@/Components/Footer/Footer.component";
import LatestVideo from "@/Components/LatestVideo/LatestVideo.component";
import PostsList from "@/Components/Posts/PostList.component";
import SliderComponent from "@/Components/Slider/Slider";

function page() {
  return (
    <>
      {/* <SliderComponent /> */}
      <Category />
      <LatestVideo />
      <PostsList />
      <Footer />
    </>
  );
}

export default page;
