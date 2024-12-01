"use client"
import BlogCard from "@/components/BlogCard";
import SkeletonBlogCard from "@/components/SkeletonBlogCard";
//import Image from "next/image";
import { useEffect, useState } from "react";
interface Post {
  id: number;
  title: string;
  content: string;
  authorId: number;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const getPosts = async () => {
    try {
      const response = await fetch("/api/posts");
      const posts = await response.json();
      console.log(posts);
      return posts
    } catch (error) {
      console.error("Error obteniendo el post:", error);
    }
  };
  useEffect(() => {
    const fetchPosts = async () => {
      const myPosts = await getPosts();
      setPosts(myPosts);
      setIsLoading(false);
    };

    fetchPosts();
  }, []);

  return (
    <div className="body-blog">
      <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">Bienvenidos a mi blog</h2>
            <p className="font-serif text-sm dark:text-gray-600">aquí encontraras contenido relacionado a programación</p>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">

            {isLoading ? < ><SkeletonBlogCard />  <SkeletonBlogCard /> <SkeletonBlogCard /><SkeletonBlogCard /></> : posts.map((post) => (
              <BlogCard
                key={post.id} // Agrega una clave única
                title={post.title}
                content={post.content}
                authorId={post.authorId}
              />
            ))}

          </div>
        </div>
      </section>d
      {/* <div className="cards-grid" >
        
        <BlogCard/>
      </div> */}
    </div>
  );
}
