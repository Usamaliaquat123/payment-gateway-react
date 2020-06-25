import './Head.css'
export default Head


const Head = (cmp, desc) => ( <div>
    <div className="brand_logo">
<p>{cmp}</p>
</div>
<p className="acNameText">{desc}</p>
</div>)

