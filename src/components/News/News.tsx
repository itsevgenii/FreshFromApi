import React from 'react';
import { useParams } from 'react-router-dom';
import { ApiData } from '../../utils/ApiData';
import NewsStyle from './News.module.scss';

interface NewsProps {
    news: ApiData | null;
}

const News: React.FC<NewsProps> = ({ news }) => {
    const { id } = useParams();
    let article = news?.articles[id as any];

    return (
        <div className={NewsStyle.newsWrapper}>
            {article ? (
                <>
                    <img src={article.image} alt={article.title} />
                    <h2>{article.title}</h2>
                    <p>{article.description}</p>
                    <a href={article.url} target="_blank" rel="noopener noreferrer">
                        Read More
                    </a>
                </>
            ) : null}
        </div>
    );
};

export default News;
