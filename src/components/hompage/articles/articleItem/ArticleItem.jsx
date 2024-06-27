const ArticleItem = ({title, image, alt, className, size,colorP}) => {

    return (
        <div className={className}>
            <img src={image} alt={alt} className={size}/>
            <div className="w-[90%]">
                <div className="flex flex-row gap-[1em] ">
                    <p className="text-[small] font-light cursor-pointer"><span className="icon" >&#xE66E; </span> 9 Sept 2020</p>
                    <p className="text-[small] cursor-pointer"><span className="icon" >&#xe644; </span> 21 Comments</p>
                </div>
                <h1 className="font-bold pt-2">{title}</h1>
            </div>
            <p className={`underline font-bold opacity-90 text-[small] justify-end cursor-pointer ${colorP}`}>Continue</p>
        </div>
    )
} 

export default ArticleItem