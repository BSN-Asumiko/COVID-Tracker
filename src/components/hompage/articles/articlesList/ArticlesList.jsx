import ArticleItem from "../articleItem/ArticleItem";

const ArticlesList = ({display, size}) => {

    return (
        <section className="flex flex-col gap-[1em]">
            <ArticleItem title="Can COVID-19 be caught from a person who has no symptoms?" image="/assets/images/blog-1.jpg" alt="image of a microscopic virus"/>
            <ArticleItem title="What you need to know About Novel Corona Virus Covid 19" image="/assets/images/blog-2.jpg" alt="image of a microscopic virus"/>
            <ArticleItem title="What can I do to protect myself and prevent the spread of disease?" image="/assets/images/blog-3.jpg" alt="image of a microscopic virus"/>
        </section>
    )
}

export default ArticlesList;