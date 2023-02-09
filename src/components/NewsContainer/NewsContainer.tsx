import React, { useState, useEffect } from "react";
import AllNews from "../AllNews/AllNews";
import { ApiData } from "../../utils/ApiData";

interface NewsContainerProps {
  filter: {} | null | any;
  search: string | null;
}

const NewsContainer: React.FC<NewsContainerProps> = ({filter, search}:NewsContainerProps ) => {
  const [news, setNews] = useState<ApiData | null >(null);
  


  let language: string, country: string, category: string;
  let keyWord:string | null;

  if(search){
    keyWord = search;
  } 

if (filter) {
  ({ language, country, category } = filter);
} else {
  language = "en";
  country = "gb";
  category = "business";
}
//   let language: string, country: string, category: string;
// filter ? Object.values(filter)


// : {language : "en", country : "gb", category : "business"}

  // filter ? (
  //   Object.values(filter)
  //   .map((filterItem: any) => (language = filterItem.language , country =  filterItem.country, filterItem.category = category))) : 
  // {language : "en", country : "gb", category : "business"}
  console.log("line 11", filter? Object.values(filter): null);



  useEffect(() => {
    let delay: number | any;
  
    const fetchData = async () => {
      clearTimeout(delay);
  
      try {
        const res = await fetch(`https://gnews.io/api/v4/top-headlines?max=10&q=${keyWord?.toLowerCase()}&language=${language}&country=${country}&category=${category}&apikey=${import.meta.env.VITE_APP_API_KEY}`);
        const data = await res.json();
        setNews(data);
      } catch (error) {
        console.log("line 48", error);
        alert("Daily Api limit reached. Please try again tomorrow.");
      }
    };
  
    delay = setTimeout(fetchData, 1000);
  
    return () => {
      clearTimeout(delay);
    };
  }, [filter, search]);
  

  return (
    news? 
    <AllNews news={news} /> : null 
  );
};

export default NewsContainer;
