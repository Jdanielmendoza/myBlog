import { Trash } from "lucide-react";

interface BlogCardProps {
  title: string;
  content: string;
  authorId: number;
}
const BlogCard: React.FC<BlogCardProps> = ({ title, content, authorId }) => {

  return (
    <article className="flex flex-col dark:bg-gray-50">
      <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
        <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://th.bing.com/th/id/OIP.otdQZwrP3gPoK1oZK-XcggHaFb?rs=1&pid=ImgDetMain" />
      </a>
      <div className="flex flex-col flex-1 p-6">
        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
        <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">{title}</a>
        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{content}</h3>
        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
          <span>Noviembre 30, 2024</span>
          {/* <span>2.1K views</span> */}
          <Trash color="#a22"  />
        </div>
      </div>
    </article>
  )
}

export default BlogCard