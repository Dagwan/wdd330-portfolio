const form = document.forms["todo"];

form.addEventListener("submit", addTask, false);

function addTask(event) {
    event.preventDefault();
    const tak = new FormData(form);
    const url = "https://jsonplaceholder.typicode.com/todos";
    const header = new Headers({
        "Accept": "application/json",
        "Content-Type": "application/json"
    });

    const request = new Request(url, {
        method: "POST",
        mode: "cors",
        header: Headers,
        body: JSON.stringify(task)
    }
    )

    fetch(request)
    .then(response => response.json())
    .then(data => console.log(`${data.title}Task saved with an id of ${data.id}`))
    .catch(error => console.log("There was an error:", error))
}