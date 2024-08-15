import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


// export class News extends Component {
//       static defaultProps = {
//             country: 'in',
//             pageSize: 8,
//             category: 'general'
//       }

//       static propTypes = {
//             country: PropTypes.string,
//             pageSize: PropTypes.number,
//             category: PropTypes.string,
//       }

//       capitalize = (str) => { return str.charAt(0).toUpperCase() + str.slice(1) }

//       constructor(props) {
//             super(props);
//             // console.log()
//             this.state = {
//                   articles: [],
//                   loading: false,
//                   page: 1,
//                   totalResults: 0
//             }
//             document.title = `${this.capitalize(this.props.category)} - NewsCat`
//       }

//       async updateNews() {
//             this.props.setProgress(10);
//             const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${page}&pagesize=${this.props.pageSize}`;
//             this.setState({ loading: true })
//             let data = await fetch(url);
//             this.props.setProgress(30);
//             let parseData = await data.json();
//             this.props.setProgress(50);
//             // console.log(parseData);
//             this.setState({
//                   articles: parseData.articles,
//                   totalResults: parseData.totalResults,
//                   loading: false
//             })
//             this.props.setProgress(100)
//       }
//       async componentDidMount() {
//             // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=af631c4c310142798dd5c43f616b46ea&page=1&pagesize=${this.props.pageSize}`;
//             // this.setState({ loading: true })
//             // let data = await fetch(url);
//             // let parseData = await data.json();
//             // // console.log(parseData);
//             // this.setState({
//             //       articles: parseData.articles,
//             //       totalResults: parseData.totalResults,
//             //       loading: false
//             // })
//             this.updateNews()
//       }

//       handlePreviousClick = async () => {
//             // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=af631c4c310142798dd5c43f616b46ea&page=${page - 1}&pagesize=${this.props.pageSize}`;
//             // this.setState({ loading: true })
//             // let data = await fetch(url);
//             // let parseData = await data.json();
//             // // console.log(parseData);
//             // this.setState({
//             //       page: page - 1,
//             //       articles: parseData.articles,
//             //       loading: false

//             // })

//             this.setState({ page: page - 1 })
//             this.updateNews()

//       }

//       handleNextClick = async () => {
//             // if (!(page + 1 > Math.ceil(totalResults / this.props.pageSize))) {
//             //       let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=af631c4c310142798dd5c43f616b46ea&page=${page + 1}&pagesize=${this.props.pageSize}`;
//             //       this.setState({ loading: true })
//             //       let data = await fetch(url);
//             //       let parseData = await data.json();
//             //       // console.log(parseData);
//             //       this.setState({
//             //             page: page + 1,
//             //             articles: parseData.articles,
//             //             loading: false
//             //       })
//             // }

//             this.setState({ page: page + 1 })
//             this.updateNews()
//       }

//       fetchMoreData = async () => {
//             this.setState({ page: page + 1 })
//             const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${page}&pagesize=${this.props.pageSize}`;
//             let data = await fetch(url);
//             let parseData = await data.json();
//             this.setState({
//                   articles: articles.concat(parseData.articles),
//                   totalResults: parseData.totalResults
//             })
//       };


//       render() {
//             return (
//                   <>
//                         <h1 className='my-2 text-center' >NewsCat - Top Headlines - {this.capitalize(this.props.category)}</h1>
//                         {loading && <Spinner />}
//                         <InfiniteScroll
//                               dataLength={articles.length}
//                               next={this.fetchMoreData}
//                               hasMore={articles.length !== totalResults}
//                               loader={<Spinner />}
//                         >
//                               <div className="container">
//                                     <div className="row">
//                                           {articles.map((element) => {
//                                                 return <div className="col-md-4 my-3" key={element.url}>
//                                                       <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
//                                                 </div>
//                                           })}
//                                     </div>
//                               </div>
//                         </InfiniteScroll>
//                         {/* <div className="container d-flex justify-content-between">
//                                     <button disabled={page <= 1} type='button' className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
//                                     <button disabled={page + 1 > Math.ceil(totalResults / this.props.pageSize)} type='button' className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
//                               </div> */}
//                   </>
//             )
//       }
// }


const News = (props) => {
      const [articles, setArticles] = useState([]);
      const [loading, setLoading] = useState(true);
      const [page, setPage] = useState(1);
      const [totalResults, setTotalResults] = useState(0)

      const capitalize = (str) => { return str.charAt(0).toUpperCase() + str.slice(1) }

      const updateNews = async () => {
            props.setProgress(10);
            const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
            setLoading(true)
            let data = await fetch(url);
            props.setProgress(30);
            let parseData = await data.json();
            props.setProgress(50);
            setArticles(parseData.articles)
            setTotalResults(parseData.totalResults)
            setLoading(false)
            props.setProgress(100)
      }

      useEffect(() => {
            document.title = `${capitalize(props.category)} - NewsCat`
            updateNews();
            //eslint-disabled-next-line
      }, [])

      const fetchMoreData = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pagesize=${props.pageSize}`;
            setPage(page + 1)
            let data = await fetch(url);
            let parseData = await data.json();
            setArticles(articles.concat(parseData.articles))
            setTotalResults(parseData.totalResults)
      };

      return (
            <>
                  <h1 className='text-center' style={{ marginTop: '60px' }} >NewsCat - Top Headlines - {capitalize(props.category)}</h1>
                  {loading && <Spinner />}
                  <InfiniteScroll
                        dataLength={articles.length}
                        next={fetchMoreData}
                        hasMore={articles.length !== totalResults}
                        loader={<Spinner />}
                  >
                        <div className="container">
                              <div className="row">
                                    {articles.map((element) => {
                                          return <div className="col-md-4 my-3" key={element.url}>
                                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                          </div>
                                    })}
                              </div>
                        </div>
                  </InfiniteScroll>

            </>
      )


}

News.defaultProps = {
      country: 'in',
      pageSize: 8,
      category: 'general'
}

News.propTypes = {
      country: PropTypes.string,
      pageSize: PropTypes.number,
      category: PropTypes.string,
}
export default News