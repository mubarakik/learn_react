export function Button(props={type, icon, text, action,handler}) {

    const { type, icon, text, action,handler } = props;

    const btnType = icon && label
            ? "btn-icon-label"  // Both icon and label
            : icon
            ? "btn-icon"         // Icon only
            : "";  

    const clickHandler = (event)=>{
        if(action && typeof handler==='function') return handler(event,props);
    }

    return (
        <button className={ `btn ${btnType} btn-${type}`} onClick={clickHandler} >
            {icon && <i className={icon}></i> }
            {text}
        </button>
        )
    
}