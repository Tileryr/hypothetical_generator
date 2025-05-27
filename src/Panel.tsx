import { useEffect, useState } from "react"

function Panel() {
    const [imageSrc, setImageSrc] = useState<string | null>(null)
    
    const wikipedia_api_url = "https://en.wikipedia.org/api/rest_v1/page/html/Gorilla"


    async function get_wikipedia_info() {
        const api_response = await fetch(wikipedia_api_url)
        const page_html_string = await api_response.text()
        const page = new DOMParser().parseFromString(page_html_string, "text/html")
        const image = page.querySelector("img")!
        setImageSrc(image.src)
        console.log(page)
    }

    useEffect(() => {
        get_wikipedia_info()
    }, [])

    
   

    return (
    <div className="bg-zinc-800 m-3 w-full rounded flex items-center justify-center">
        <div className="h-2/3 p-8 bg-zinc-700 rounded">
            <img src={imageSrc ? imageSrc : undefined} alt="GORRILLA"></img>
            <p className="text-white text-2xl">
                <strong>
                Gorrila
                </strong>
            </p>
            <ul className="text-white text-xl list-disc ml-8">
                <li>Strength</li>
                <li>Weight</li>
                <li>Height</li>
                <li>Speed</li>
            </ul>
        </div>
    </div>
    )
}

export default Panel