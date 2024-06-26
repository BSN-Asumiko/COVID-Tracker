const ArticleItem = ({title, image, alt}) => {

    return (
        <div className="flex flex-row gap-[2em] w-[100%] mb-5">
            <img src={image} alt={alt} className="w-[7em] justify-start"/>
            <div className="text-[color:var(--col-body)] w-[60%]">
                <div className="flex flex-row gap-[1em]">
                    <p className="text-[small] font-light">icon 9 Sept 2020</p>
                    <p className="text-[small]">icon 21 Comments</p>
                </div>
                <h1 className="font-bold">{title}</h1>
            </div>
            <p className="underline font-bold text-[color:var(--col-body)] opacity-90 text-[small] justify-end">Continue</p>
        </div>
    )
} 

export default ArticleItem