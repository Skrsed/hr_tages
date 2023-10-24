export const baseUrl = 'https://jsonplaceholder.typicode.com'

// Implementation code where T is the returned data shape
export const api = async <T>(url: string): Promise<T> => {
    const response = await fetch(baseUrl + url)
    if (!response.ok) {
        throw new Error(response.statusText)
    }

    return <T>(await response.json())
}