import { useState,useEffect } from "react";

interface Props {
    res: string
}

function ResultPreview({ res } : Props) {

    const [result,setResult] = useState('Your answer will appear here');

    useEffect(() => {
        setResult(res);
      }, [res]);
    
    return <><h1>{result}</h1></> 
}

export default ResultPreview;