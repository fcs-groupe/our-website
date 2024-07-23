import { blogs } from "@/blogsData";
import Layout from "@/components/Layout";
import styles from "@/styles/Blog.module.scss";
import { useEffect, useState } from "react";
function Blog({ id }) {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    setBlog(blogs.find((blog) => blog.id === Number(id)));
  }, []);

  return (
    <Layout title="blog">
      {blog && (
        <div className={styles.container}>
          <img alt={blog.title} src={blog.img} />
          <p className={styles.title}>{blog.title}</p>
          <p>{blog.content}</p>
        </div>
      )}
    </Layout>
  );
}

export default Blog;

export function getServerSideProps(context) {
  return {
    props: {
      id: context.params.id,
    },
  };
}
