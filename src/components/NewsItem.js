import React from 'react'

/*CLASS-BASED COMPONENT

export class NewsItem extends Component {
      render() {
            let { title, description, imageUrl, newsUrl, author, date, source } = this.props
            let defaultImage = "https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg"
            return (
                  <div>
                        <div class="card">
                              <span className="position-absolute top-0 translate-middle badge rounded-pill bg-success" style={{ left: '50%', zIndex: '1' }}>
                                    {source}
                              </span>
                              <img src={imageUrl === null ? defaultImage : imageUrl} alt="..." />
                              <div className="card-body">
                                    <h5 className="card-title">{title}</h5>
                                    <p className="card-text">{description}</p>
                                    <p className="card-text"><small className="text-muted">By {author === null ? 'Unknown' : author} on {new Date(date).toGMTString()}</small></p>
                                    <a rel="noreferrer" href={newsUrl} target='_blank' class="btn btn-sm btn-dark">Read more</a>
                              </div>
                        </div>
                  </div>
            )
      }
}
*/

const NewsItem = (props) => {
      let { title, description, imageUrl, newsUrl, author, date, source } = props
      let defaultImage = "https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg"
      return (
            <div>
                  <div class="card">
                        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-success" style={{ left: '50%', zIndex: '1' }}>
                              {source}
                        </span>
                        <img src={imageUrl === null ? defaultImage : imageUrl} alt="..." />
                        <div className="card-body">
                              <h5 className="card-title">{title}</h5>
                              <p className="card-text">{description}</p>
                              <p className="card-text"><small className="text-muted">By {author === null ? 'Unknown' : author} on {new Date(date).toGMTString()}</small></p>
                              <a rel="noreferrer" href={newsUrl} target='_blank' class="btn btn-sm btn-dark">Read more</a>
                        </div>
                  </div>
            </div>
      )
}

export default NewsItem
