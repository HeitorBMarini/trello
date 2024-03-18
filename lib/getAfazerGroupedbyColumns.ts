import { databases } from "../appwrite"

export const getAfazerGroupedbyColumns = async () =>{
    const data = await databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID!,
        process.env.NEXT_PUBLIC_AFAZER_COLLECTION_ID!
    );

   const afazer = data.documents;
}