import ArticlesList from "../articlesList/ArticlesList";

const ArticlesSection = () => {

    return (
        <section className="m-auto w-[60%] mt-[3em] pb-[2em]">
            <ArticlesList className="flex flex-col gap-[1em] pb-6" />
        </section>
    )
}

export default ArticlesSection;