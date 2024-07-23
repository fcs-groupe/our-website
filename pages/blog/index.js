import { blogs } from "@/blogsData";
import Layout from "@/components/Layout";
import styles from "@/styles/BlogList.module.scss";
import Link from "next/link";
function BlogList(props) {
  return (
    <Layout title="blog">
      <div className={styles.container}>
        {blogs.map((blog) => {
          return (
            <Link
              href={`/blog/${blog.id}`}
              key={blog.id}
              className={styles.article}
            >
              <img alt={blog.title} src={blog.img} />
              <p>{blog.title}</p>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
}

export default BlogList;
