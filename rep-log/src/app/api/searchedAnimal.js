export async function GET(request) {
    const response = await fetch("");
    const data = await response.json();

    return new Response(JSON.stringify(data), {
        headers: {
            "Conent-Type": "application/json",
        },
    });
}


//This code defines a server-side function that fetches data from the API and returns it as a JSON response.