import { Baseurl } from "../../config/BaseUrl";

export const newsByslugurl = async (slugurl) => {
    try {
        const res = await fetch(
            `${Baseurl}/api/v1/news/findbyurl/${slugurl}`,
            {
                method: "GET",
                cache: "no-store",
            }
        );

        const data = await res.json();

        return data;
    } catch (e) {
        console.log(e);
    }
};
export const newsvisitUpdate = async (newsid) => {
    try {
        const res = await fetch(
            `${Baseurl}/api/v1/news/newsvisitupdate/${newsid}`,
            {
                method: "PUT",
                cache: "no-store",
            }
        );

        const data = await res.json();
        return data;
    } catch (e) {
        console.log(e);
    }
};