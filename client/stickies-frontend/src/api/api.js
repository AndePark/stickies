const BASE_URL = "http://localhost:4000";

export async function fetchData(endpoint){
    const res = await fetch(`${BASE_URL}/${endpoint}`);
    if(!res.ok) throw new Error(`Failed to fetch ${endpoint}`)
    return res.json();
}