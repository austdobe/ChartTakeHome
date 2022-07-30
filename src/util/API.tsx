import { BASE_URL } from "./config";

const apiSettings = {
    fetchAuthors: async (author:string) => {
        const endpoint = `${BASE_URL}?search/authors.json?q=${author}`
        return await(
            fetch(endpoint)
                .then((response) => response.json())
                .then((data)=> {
                    console.log(data.doc) 
                    return data.doc
                })
        )
    }

}

export default apiSettings