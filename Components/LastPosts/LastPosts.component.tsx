import Image from "next/image";
import s from "./LastPosts.component.module.scss";

import img from "@/assets/react.webp";

function LastPosts() {
  return (
    <section>
      <section>
        <div>
          <h2>Najnowsze</h2>
        </div>
        <div>
          <div>
            <Image width={250} height={150} src={img} alt="" />
          </div>
          <div>
            <h3>Jak zacząć się uczyć React w 2024 roku ?</h3>
            <p>
              Tutaj podzielę się z wami najlepszymi kursami i ksiązkami o
              tematyce tworzenia stron internetowych. Koniecznie musisz je znać
            </p>
            <span>Oliwier Markiewicz</span>
          </div>
        </div>
      </section>
    </section>
  );
}

export default LastPosts;
