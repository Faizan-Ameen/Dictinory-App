// let search = document.getElementById('search');
// let searcbtn = document.getElementById('searchbtn');

// const getData = async (searchValue) => {
//       let data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`);
//       let jsonData = await data.json();
//       document.querySelector('.text').innerHTML = ""
//       let div = document.createElement("div");
//       div.classList.add("details");
//       div.innerHTML = ` <h1>Word:<span>${jsonData[0].word}</span></h1>
//       <h2>Meaning: <span>${jsonData[0].meanings[0].definitions[0].definition}</span></h2>
//       // <h3>Example: <span>${jsonData[0].meanings[0].definitions[6].example}</span></h3>
//       <h4>Synonyms: <span>${jsonData[0].meanings[0].synonyms}</span></h4>
//       <h4>Antonyms: <span>${jsonData[0].meanings[0].antonyms}</span></h4>
//       <h4>Parts of Speech: <span>${jsonData[0].meanings[0].partOfSpeech}</span></h4>




//       `

//       // return false;
//       document.querySelector('.text').appendChild(div)
//       console.log(jsonData);
//       console.log(jsonData[0].word);
//       console.log(jsonData[0].meanings[0].definitions[0].definition);
//       console.log(jsonData[0].meanings[0].synonyms);
//       console.log(jsonData[0].meanings[0].antonyms);
//       console.log(jsonData[0].meanings[0].partOfSpeech);
//       // console.log(jsonData[0].meanings[0].definitions[6].example);


// }


// searcbtn.addEventListener('click', () => {
//       let searchValue = search.value;
//       if (searchValue == "") {
//             alert("Please Enter value")
//       }
//       else {
//             getData(searchValue);
//       }
// })








var search = document.getElementById('search');
var searchbtn = document.getElementById('searchbtn');



const getData = async (searchValue) => {
      let Data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`);
      let jsonData = await Data.json()
      console.log(Data);
      console.log(jsonData[0]);
      document.querySelector(".text").innerHTML = ""
      let div = document.createElement("div");
      div.classList.add("details");
      div.innerHTML = `
      <h1>Word:<span>${jsonData[0].word}</span></h1>
      <h2>Meaning: <span>${jsonData[0].meanings[0].definitions[0].definition}</span></h2>
      <h3>Example: <span>${jsonData[0].meanings[0].definitions.example == undefined ? "Not Found" : jsonData[0].meanings[0].definitions.example}</span></h3>
      <h3>Synonyms:<span>${jsonData[0].meanings[0].synonyms}</span></h3>
      <h3>Part of speech:<span>${jsonData[0].meanings[0].partOfSpeech}</span></h3>
  
      <a href=${jsonData[0].sourceUrls[0]} target="_blank"> Read more</a>
      `

      document.querySelector(".text").appendChild(div)






      console.log(jsonData[0].meanings);
      console.log(jsonData[0].meanings[0].definitions[0].definition);
      console.log(jsonData[0].meanings[0].definitions[6].example);
      console.log(jsonData[0].meanings[0].synonyms);
      console.log(jsonData[0].meanings[0].partOfSpeech);
      console.log(jsonData[0].meanings[0].partOfSpeech);
      console.log(jsonData[0].sourceUrls[0]);








}




searchbtn.addEventListener('click', () => {
      let searchValue = search.value;
      if (searchValue == "") {
            alert("Please Enter Word")
      }
      else {
            getData(searchValue)
      }
})