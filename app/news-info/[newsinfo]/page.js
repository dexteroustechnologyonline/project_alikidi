import { newsByslugurl } from "../../../utils/news";
import NewsDetails from "../newsDetails";

export async function generateMetadata({ params }) {
    let newsUrl ="";
    let fetchnews = {};
    try {
        newsUrl = decodeURIComponent(params.newsinfo); 
        fetchnews = await newsByslugurl(newsUrl);
    } catch (error) {
        
    }
    if (!fetchnews) {
        newsUrl = params.newsinfo; 
        fetchnews = await newsByslugurl(newsUrl);
    }
    
    const singlenews = fetchnews.news[0]
    return {
        title: `${singlenews.newsTitle}`,
        description: `${singlenews.newsContent}}`,
        openGraph: {
            title: `${singlenews.newsTitle}}`,
            description: `${singlenews.newsContent}}`,
            images: singlenews.thumbnail ? [singlenews.thumbnail] : [],
        },
    }

}


export default async function NewsInfo({ params }) {
    const newsUrl = decodeURIComponent(params.newsinfo);
    const fetchnews = await newsByslugurl(newsUrl);
    const singlenews = fetchnews.news[0]

    return (
        <>
            <NewsDetails newsitem={singlenews} newsUrl={newsUrl} />
        </>
    )
}