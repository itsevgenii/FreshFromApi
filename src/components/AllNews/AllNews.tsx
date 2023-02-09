import { useState, useEffect } from 'react'
import { ApiData } from '../../utils/ApiData'
import AllNewsStyle from "./AllNews.module.scss"
import breakingNews from "./brNewsIcon.png"
import News from '../News/News'

import { nanoid } from 'nanoid'

import { Link, Router, Route } from 'react-router-dom';

interface AllNewsProps {
    news: ApiData | null;
  }

const AllNews : React.FC<AllNewsProps> = ({news}) => {
    const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);



    //useEffect to lsiten to the screen size changes
useEffect(() => {
    if (typeof window !== 'undefined') {
        const handleWindowResize = () => {
          setScreenWidth(window.innerWidth);
        };
  
        window.addEventListener('resize', handleWindowResize);
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }
    }, []);
    //empty dependecy because we need to see our screen size continuesly

  return (
    <div>
      {screenWidth > 425 ? (
        //  desktop view
        <div>
        { news ? 
            <>
            <hr/>
                <div className={AllNewsStyle.topNewsWrapperDesktop}>
                    <img src={news.articles[0].image} alt={news.articles[0].title} />
                    <div className={AllNewsStyle.topNews}>
                    <img  className={AllNewsStyle.breakingNews} src={breakingNews} alt="icon for breaking news"/>
                        <h2>    Breaking News: </h2>
                    <h3>{news.articles[0].title}...</h3>
                    <p>{news.articles[0].description}...</p>
                    </div>
                </div>
                <hr/>
                <h2>Latest and International news:</h2>
                <hr/>
                <div className={AllNewsStyle.newsListDesktop}>
                    {news.articles.map((article, index) => {
                         const id = `${nanoid()}-${index}`;
                        if (index !== 0) {
                            return (
                                <>
                                <div className={AllNewsStyle.NewsWrapperDesktop} key={id}>
                                <Link to={`/news/${id}`} target="_blank">
                                    <img src={article.image} alt={article.title} />
                                    <h4>{article.title.slice(0,28)}...</h4>
                                    <p>{article.description.slice(0, 40)}...</p>
                                </Link>
                                </div>
    
                                {/* <Route path="/news/:id" render={props => <News {...props} news={news} />} /> */}
              
                                </>
                                
                            )
                            
                        }
                        return null;
                    })}
                </div>
            </> : null
        }
    </div>
      ) : (
        //  mobile view
        <div>
        { news ? 
            <>
                <div className={AllNewsStyle.topNewsWrapper}>
                    <img src={news.articles[0].image} alt={news.articles[0].title} />
                    <div className={AllNewsStyle.topNews}>
                    <h3>{news.articles[0].title.slice(0, 40)}...</h3>
                    <p>{news.articles[0].description.slice(0,50)}...</p>
                    </div>
                </div>
                <ul className={AllNewsStyle.newsList}>
                    {news.articles.map((article, index) => {
                         const id = `${nanoid()}-${index}`;
                        if (index !== 0) {
                            return (
                                <Link to={`/news/${id}`} target="_blank">
                                <li key={id}>
                                    <h4>{article.title}</h4>
                                    <p>{article.description}</p>
                                </li>
                                </Link>
                            )
                        }
                        return null;
                    })}
                </ul>
            </> : null
        }
    </div>
      )}
    </div>
  );

}

export default AllNews;
