import './Heads.css'

const Heads = (cmp, desc) => {
    return (
        <div>
        <div className="brand_logo">
    <p>{cmp}</p>
    </div>
    <p className="acNameText">{desc}</p>
    </div>    
    )
    
    }
    export default Heads

