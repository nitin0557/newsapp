import React from 'react'

const NewsItem = (props) => {
  
  
   let {title,description,imageUrl,newsUrl,author,date,source} = props;
    return (
      <div className="my-3">
             <div className="card">
            <img src={!imageUrl?"https://www.reuters.com/resizer/I85O8gGzpShASqC39IxYzeVRvo0=/728x381/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/RT7WAUUKHNN63A7V4YGFO4OCDI.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title"> {title}...<span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"90%",zIndex:"1" }}>
            {source}
           <span className="visually-hidden">unread messages</span>
            </span> </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className='text-muted '> By {!author ?"unknown":author} on {date}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
            </div>
      </div>
    )
  
}

export default NewsItem  