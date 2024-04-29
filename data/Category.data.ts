import imgReact from "@/assets/images/react.webp";
import imgEdu from "@/assets/images/edu.jpg";
import imgProg from "@/assets/images/prog.jpg";

export const CATEGORY_LIST = [
  {
    id: 'react',
    header: "React",
    description:
      "Posty o tej tematyce będą związane z najpopularniejszym frameworkiem w JavaScript. Chcesz dowiedzieć się więcej ? ",
    img: imgReact,
  },
  {
    id: 'materialy-edukacyjne',
    header: "Materiały edukacyjne",
    description:
      "Tutaj podzielę się z wami najlepszymi kursami i ksiązkami o tematyce tworzenia stron internetowych. Koniecznie musisz je znać ;) ",
    img: imgEdu,
  },
  {
    id: 'programowanie-ogolne',
    header: "Programowanie ogólne",
    description:
      " Ta kategoria jest miejscem, gdzie zgłębiasz szerokie spektrum tematów związanych z programowaniem.",
    img: imgProg,
  },
];
