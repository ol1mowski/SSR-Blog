import CategorySubpage from "@/Components/CategorySubpage/CategorySubpage.component";
import s from "./page.module.scss";

function page({ params }: { params: { categoryName: string } }) {
  const categoryNameParams = params.categoryName;

  let categoryName: string = "";

  switch (categoryNameParams) {
    case "react":
      categoryName = "React";
      break;
    case "materialy-edukacyjne":
      categoryName = "Materiały Edukacyjne";
      break;
    case "programowanie Ogólne":
      categoryName = "Programowanie Ogólne";
      break;
      default:
        categoryName = 'Nieznana kategoria'
  }

  return (
    <section className={s.container}>
      <CategorySubpage
        categoryName={
          categoryName
        }
        amountOfArticles={"3 artykuły"}
      />
    </section>
  );
}

export default page;
