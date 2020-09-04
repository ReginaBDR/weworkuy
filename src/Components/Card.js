import React, { useState, useRef, useEffect } from "react";

const JobCard = ({ article }) => {

    //Agregando etiquetas del card-right si existen
    const tags = [article.fields.role, article.fields.level]
    if (article.fields.languages) {
        tags.push(...article.fields.languages);
    }
    if (article.fields.tools) {
        tags.push(...article.fields.tools);
    }

    //Desplegando card acordeon
    const [active, setActive] = useState(false)
    const contentRef = useRef(null)

    useEffect(() => {
        contentRef.current.style.maxHeight = active ? `${contentRef.current.scrollHeight}px` : '0px'
    }, [contentRef, active])

    const toogleActive = () => {
        setActive(!active)
    }
    
    return (
        <div className="list-container" >
            <section className="card" onClick={toogleActive}>
                <div className="row-1">
                    <div className="card-left">
                        <div>
                            <img src={article.fields.logo.fields.file.url} alt={article.fields.company} />
                        </div>
                        <div>
                            <div className="first-row">
                                <h3 className="company"> {article.fields.company} </h3>
                                {article.fields.isNew && <span className="new">Nuevo!</span>}
                                {article.fields.featured && <span className="featured">Destacado</span>}
                            </div>
                            <h2 className="position"> {article.fields.position} </h2>
                            <div className="third-row">
                                <span className="postedAt"> {article.fields.postedAt} · </span>
                                <span className="contract"> {article.fields.contract} · </span>
                                <span className="location"> {article.fields.location} </span>
                            </div>
                        </div>
                    </div>
                    <div className="card-right">
                        {tags ? tags.map((tag) => (<span>{tag}</span>)) : ""}
                        <img className={active ? 'accordion-icon rotate': 'accordion-icon'} src="https://img.icons8.com/flat_round/64/000000/expand-arrow--v1.png" alt="arrow"/>
                    </div>
                </div>
                <div
                    ref={contentRef}
                    className="accordion-content">
                    <p>{article.fields.information}</p>
                    <p>To aply for this job send your curriculum to: <span>{article.fields.email}</span></p>
                </div>
            </section>
        </div >
    )
};

export default JobCard;

