export async function getDataFromApi1(){
    const api1 = 'https://jsonplaceholder.typicode.com/comments'

    try{
        const response1 = await fetch(api1)

        if(!response1.ok){
            throw new Error("Error fetching data from api 1")
        }

        return await response1.json()

    }
    catch(err){
        console.error(err)
    }
}