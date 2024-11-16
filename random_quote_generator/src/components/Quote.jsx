export default function Quote({quote,author,tags}){

    return (
        <div className="quote">
            <div className="quote-text">
                <div>"{quote}"</div>
                <div className="align-right">{author}</div>            
            </div>
           <div className="categories">
            {tags.map((tag,index)=>(
                <div key={index} className="tag">{tag}</div>
            ))}
            </div>
        </div>
    )
}