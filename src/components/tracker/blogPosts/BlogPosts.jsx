/* eslint-disable react/prop-types */
import ArticleItem from "@/components/hompage/articles/articleItem/ArticleItem";

const BlogPosts = ({className}) => {

    return (
        <section className={className}>
            <ArticleItem title="Can COVID-19 be caught from a person who has no symptoms?" image="/assets/images/blog-1.jpg" alt="image of a microscopic virus" size="w-[90%]" className="flex flex-col gap-[1em] w-[100%] mb-9 self-center" colorP="text-[color:var(--col-common-blue)]"/>
            <ArticleItem title="What can I do to protect myself and prevent the spread of disease?" image="/assets/images/blog-3.jpg" alt="image of hands handling blood sample"  size="w-[90%]" className="flex flex-col gap-[1em] w-[100%] mb-9 justify-center" colorP="text-[color:var(--col-common-blue)]"/>
            <ArticleItem title="What you need to know About Novel Corona Virus Covid 19" size="w-[90%]" image="/assets/images/blog-2.jpg" alt="image of Earth with a white mask on top and warning signs around" className="flex flex-col gap-[1em] w-[100%] mb-9 justify-center" colorP="text-[color:var(--col-common-blue)]"/>
            <ArticleItem title="Can COVID-19 be caught from a person who has no symptoms?" size="w-[90%]" image="/assets/images/blog-1.jpg" alt="image of a microscopic virus" className="flex flex-col gap-[1em] w-[100%] mb-9 justify-center" colorP="text-[color:var(--col-common-blue)]"/>
            <ArticleItem title="What can I do to protect myself and prevent the spread of disease?" image="/assets/images/blog-3.jpg" alt="image of hands handling blood sample" size="w-[90%]" className="flex flex-col gap-[1em] w-[100%] mb-9 justify-center" colorP="text-[color:var(--col-common-blue)]"/>
            <ArticleItem title="What you need to know About Novel Corona Virus Covid 19" 
            size="w-[90%]" image="/assets/images/blog-2.jpg" alt="image of Earth with a white mask on top and warning signs around" className="flex flex-col gap-[1em] w-[100%] mb-9 justify-center" colorP="text-[color:var(--col-common-blue)]"/>
        </section>

    )
}

export default BlogPosts;