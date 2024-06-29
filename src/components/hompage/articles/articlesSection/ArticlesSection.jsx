import ArticlesList from "../articlesList/ArticlesList";

const ArticlesSection = () => {

    return (
        <section className="m-auto ml:w-[60%] w-[80%] mt-[3em] pb-[2em]">
            <ArticlesList className="flex flex-col gap-[1em] pb-6 content-center" />
        </section>
    )
}

export default ArticlesSection;