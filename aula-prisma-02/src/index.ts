import prisma from "./database/database";

(async () => {
  const result = await prisma.posts.findMany()
  console.log("Posts encontrados no banco:", result);
})();