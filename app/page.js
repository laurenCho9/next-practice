import styles from "./page.module.css";
import Link from "next/link";
import { prisma } from "./db";

export default async function Home() {
  // await prisma.todo.create({ data: { title: "테스트 데이터" } });
  const todos = await prisma.todo.findMany();
  console.log("todos", todos);
  return (
    <>
      <h1>안녕 넥스트</h1>
      <Link href="/news">Go to News</Link>
      {todos.map((todo) => (
        <h1>{todo.title}</h1>
      ))}
    </>
  );
}
