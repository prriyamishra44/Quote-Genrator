quoteEl = document.getElementById("quote");
authorEl = document.getElementById("author");
btnEl = document.getElementById("btn");

async function getQuote() {
  try {
    url = "https://api.quotable.io/random";
    btnEl.innerText = "Loading..."
    btnEl.disabled = true;
    quoteEl.innerText = "Updateing...";
    authorEl.innerText = "Updateing...";
     const data = await fetch(url).then((res) => res.json());
    quoteEl.innerText = `${data.content}`;
    authorEl.innerText = `~ ${data.author}`;
    btnEl.innerText = "GET A QUOTE"
    btnEl.disabled = false;
    console.log(data);
  } catch (error) {
    quoteEl.innerText = 'somthig went wrong';
    authorEl.innerText = 'An error Accour'
    btnEl.innerText = "GET A QUOTE"
    btnEl.disabled = false;
  }
}
getQuote();

btnEl.addEventListener("click", getQuote);
