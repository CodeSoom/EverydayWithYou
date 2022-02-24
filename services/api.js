const apiKey = 'AIzaSyAXxJOkavJhYFm-eN26iFydGWMlgDuJ6BE';
const engineId = 'd99fb4d038db63ea8';

export async function fetchImgs(searchWord) {
  const url = 'https://www.googleapis.com/customsearch/v1?'
    + `key=${apiKey}&cx=${engineId}&fileType=jpg&q=${searchWord}`;
  const response = await fetch(url);
  console.log(response)
  const data = await response.json();
  return data;
}
