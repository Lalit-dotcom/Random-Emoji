const btnEl = document.getElementById("emoji");
const titleEl = document.getElementById("title");
const key = "7088589d190678e48469e8bb189d4cbd80e325f6";

async function generateEmoji(){
    const url = `https://emoji-api.com/emojis?access_key=${key}`;
    const result = await fetch(url);
    const data = await result.json();
    const randomNumber = Math.floor(Math.random() * data.length)
    const randomEmojiDetails = data[randomNumber];
    const EmojiCharacter = randomEmojiDetails.character;
    const EmojiTitle = randomEmojiDetails.unicodeName;
    btnEl.innerText = EmojiCharacter;
    titleEl.innerText = EmojiTitle.replace(/^E\d+(\.\d+)?\s*/i, '');
}

btnEl.addEventListener("click", generateEmoji)