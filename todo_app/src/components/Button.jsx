export function Button(props={type, icon, text, action,handler,parent_props}) {

    const { type, icon, text, action,handler,parent_props } = props;

    const btnType = icon && text
            ? "btn-icon-label"  // Both icon and label
            : icon
            ? "btn-icon"         // Icon only
            : "";  

    const clickHandler = (event)=>{
        if(typeof handler==='function') return handler(event,props);
    }

    return (
        <button className={ `btn ${btnType} btn-${type}`} onClick={clickHandler} >
            {icon && <i className={icon}></i> }
            {text}
        </button>
        )
    
}