import { collection, getDocs } from "firebase/firestore";

// import { QueryClient } from "@tanstack/react-query";

// import { ref, getDownloadURL, listAll, getStorage } from "firebase/storage";
import { db } from "@/config/firebase";

// export const queryClient = new QueryClient();

// export const getImageUrl = async () => {
//   try {
//     const storage = getStorage();
//     const imagesFolder = "images"; // image folder path
//     const folderRef = ref(storage, imagesFolder);

//     const files = await listAll(folderRef);

//     const imageUrls = await Promise.all(
//       files.items.map(async (fileRef) => {
//         return await getDownloadURL(fileRef);
//       })
//     );

//     return imageUrls;
//   } catch (error) {
//     console.error("Error fetching images:", error);
//     throw error;
//   }
// };

async function fetchData(collectionName: string) {
  const collectionRef = collection(db, collectionName);

  try {
    const snapshot = await getDocs(collectionRef);
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return data;
  } catch (error) {
    throw error;
  }
}

export function fetchElements(element: string) {
  const collectionName = element;
  return fetchData(collectionName);
}

// fetch data function

//   fetchElements("Blog").then((item) => {
//     const data = item.find((item) => item.id === "categories");
//   });
