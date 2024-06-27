import BlogPosts from "./BlogPosts"

const BlogLists = () => {

    return (
        <section>
            <BlogPosts className="grid grid-cols-[repeat(3,1fr)] grid-rows-[repeat(2,1fr)] w-[95%] m-auto items-center"/>
        </section>
    )
};

export default BlogLists