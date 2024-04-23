import react from "@/assets/react.webp";
import prog from '@/assets/prog.jpg';
import book from '@/assets/books.jpeg';

export const MAIN_POST = [
  {
    id: 1,
    title: "Jak zacząć się uczyć React w 2024 roku ?",
    description:
      "Poznaj najlepsze praktyki, zasoby i strategie na start z Reactem w 2024 roku, aby skutecznie rozpocząć swoją przygodę z jedną z najpopularniejszych bibliotek JavaScript do tworzenia interfejsów użytkownika.",
    author: "Oliwier Markiewicz",
    data: "04-04-2024",
    img: react,
  },
];

export const OTHER_POST = [
  {
    id: 1,
    title: "Jak zacząć się uczyć React w 2024 roku ?",
    description:
      "Poznaj najlepsze praktyki, zasoby i strategie na start z Reactem w 2024 roku, aby skutecznie rozpocząć swoją przygodę z jedną z najpopularniejszych bibliotek JavaScript do tworzenia interfejsów użytkownika.",
    author: "Oliwier Markiewicz",
    data: "04-04-2024",
    img: react,
    category: "React",
    time: 5,
  },
  {
    id: 2,
    title: "Co na początek backend czy frontend ?",
    description:
      "Odkryj, które podejście — backend czy frontend — najlepiej odpowiada Twoim celom i stylowi nauki, oraz poznaj kluczowe aspekty obu ścieżek, aby ułatwić sobie podjęcie decyzji, od czego zacząć swoją przygodę z programowaniem.",
    author: "Oliwier Markiewicz",
    data: "11-04-2024",
    img: prog,
    category: "Programowanie ogólne",
    time: 7,
  },
  {
    id: 3,
    title: "Marka ogólna w brany IT - recenzja ksiązki",
    description:
      "Zapoznaj się z recenzją książki 'Marka ogólna w branży IT', która analizuje, jak skutecznie budować i zarządzać marką w dynamicznie rozwijającym się sektorze technologicznym.",
    author: "Oliwier Markiewicz",
    data: "14-04-2024",
    img: book,
    category: "Materiały edukacyjne",
    time: 5,
  },
];

export const POSTS_CONTENT = [
  {
    id: 1,
    title: "Co to jest React ?",
    description: `React to popularna biblioteka języka JavaScript, stworzona przez
        inżynierów z Facebooka, która jest używana do budowania interfejsów
        użytkownika, szczególnie w jednostronicowych aplikacjach (ang.
        single-page applications). Umożliwia tworzenie dużych aplikacji
        internetowych, które mogą zmieniać dane wyświetlane na ekranie bez
        konieczności przeładowywania strony. Główną zaletą Reacta jest skupienie
        na składnikach (ang. components), co pozwala na łatwe zarządzanie stanem
        i reużywanie kodu.`,
  },
  {
    id: 2,
    title: "Jak używać Hooks ?",
    description: `
React Hooks to specjalne funkcje, które pozwalają na używanie stanu oraz innych funkcji Reacta w komponentach funkcyjnych. Wprowadzone w wersji 16.8, Hooks stanowią alternatywę dla klasycznych komponentów klasowych, umożliwiając zarządzanie stanem, efektami ubocznymi i innymi aspektami Reacta w bardziej wydajny i łatwy sposób. Poniżej przedstawię podstawowe informacje o najważniejszych Hooksach, takich jak useState, useEffect, useContext, oraz jak można ich używać.`,
  },
  {
    id: 3,
    title: "Zarządzanie stanem",
    description: `Zarządzanie stanem w aplikacjach React jest kluczowym aspektem, który pozwala na kontrolowanie danych i ich przepływu w aplikacji. Istnieje kilka różnych podejść i narzędzi, które możemy wykorzystać do zarządzania stanem, w zależności od skomplikowania i rozmiaru naszej aplikacji.`,
  },
  {
    id: 4,
    title: "Advanced Patterns",
    description: `Zarządzanie stanem w zaawansowanych aplikacjach React może być skomplikowane, ale istnieje kilka wzorców projektowych, które pomagają uporządkować ten proces. Oto teoria za kilkoma z tych zaawansowanych wzorców:

1. Compound Components
Compound Components to wzorzec, który pozwala na tworzenie bardziej złożonych interfejsów poprzez zgrupowanie wielu komponentów, które dzielą logikę stanu. Pozwala to na zachowanie odpowiedniej elastyczności i reużywalności, jednocześnie zapewniając silną korelację między poszczególnymi częściami komponentu.

2. Render Props
Render Props to technika, w której komponent przekazuje funkcję do swoich dzieci (zwykle jako prop o nazwie 'render'), której zadaniem jest określenie, co ma być renderowane. To podejście umożliwia bardziej dynamiczne i elastyczne wykorzystanie danych stanu i logiki między komponentami bez tworzenia sztywnych hierarchii.

3. Higher-Order Components (HOC)
Higher-Order Components, czyli komponenty wyższego rzędu, to funkcje przyjmujące komponent jako argument i zwracające nowy, ulepszony komponent. HOC są używane do reużywania logiki, wzbogacania komponentów o dodatkowe propsy lub stan, oraz do zarządzania cross-cutting concerns (aspekty przekrojowe) w aplikacji.

4. Kontrolowany vs. Niekontrolowany Komponent
W kontekście formularzy, React oferuje dwa podejścia: kontrolowane i niekontrolowane komponenty. Kontrolowane komponenty mają swój stan zarządzany przez React (zazwyczaj przez stan komponentu), podczas gdy niekontrolowane komponenty zarządzają swoim stanem bezpośrednio w DOM, co daje im większą swobodę, ale mniejszą kontrolę ze strony Reacta.

5. State Management Libraries
Kiedy zarządzanie stanem staje się zbyt skomplikowane dla prostych rozwiązań Reacta, developerzy często sięgają po biblioteki zewnętrzne. Takie narzędzia jak Redux, MobX, lub Recoil oferują rozbudowane rozwiązania do zarządzania stanem globalnym, lokalnym oraz asynchronicznym, umożliwiając łatwiejsze zarządzanie stanem w dużych aplikacjach.

6. Context API
React Context API pozwala na tworzenie globalnego "magazynu" dla danych, które mają być dostępne w wielu komponentach na różnych poziomach hierarchii, bez konieczności przekazywania propsów przez każdy poziom komponentów.

Każdy z tych wzorców ma swoje zastosowania i najlepiej sprawdza się w odpowiednich kontekstach. Wybór odpowiedniego wzorca zależy od specyfiki problemu, który próbujesz rozwiązać, oraz od preferencji i doświadczenia zespołu developerskiego.`,
  },
];
