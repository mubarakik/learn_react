export default function Button({ icon, text, className, type, value, onClick }) {
    const handleClick = (e) => {
      if (typeof onClick === 'function') {
        onClick(e, { icon, text, className, type, value });
      }
    };
  
    return (
      <button className={className} onClick={handleClick}>
        {icon && <i className={icon}></i>}
        {text}
      </button>
    );
  }