import ArticleItem from "../articleItem/ArticleItem";

const ArticlesList = ({className}) => {

    return (
        <section className={className}>
            <ArticleItem title="Can COVID-19 be caught from a person who has no symptoms?" image="/assets/images/blog-1.jpg" alt="image of a microscopic virus" size="w-[7em]" className="flex flex-row gap-[2em] w-[100%] mb-5 justify-center text-[color:var(--col-body)]" colorP="text-[color:var(--col-body)]"/>
            <ArticleItem title="What you need to know About Novel Corona Virus Covid 19" image="/assets/images/blog-2.jpg" alt="image of Earth with a white mask on top and warning signs around" size="w-[7em]" className="flex flex-row gap-[2em] w-[100%] mb-5 justify-center text-[color:var(--col-body)]" colorP="text-[color:var(--col-body)]"/>
            <ArticleItem title="What can I do to protect myself and prevent the spread of disease?" size="w-[7em]" image="/assets/images/blog-3.jpg" alt="image of hands handling blood sample" className="flex flex-row gap-[2em] w-[100%] mb-5 justify-center text-[color:var(--col-body)]" colorP="text-[color:var(--col-body)]"/>
        </section>
    )
}

export default ArticlesList;