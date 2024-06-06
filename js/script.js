const category = ['IRL', 'Just Chatting', 'Pools, Hot Tubs, and Beaches', 'Makers & Crafting', 'Apex Legends', 'XDefiant', 'World of Warships', 'Elden Ring','FFVII Rebirth', 'Tekken 8', 'Dark Souls'];
const adjective = ['skimpy', 'frilly', 'tight', 'revealing', 'flashy', 'gaudy', 'tacky', 'trashy', 'slutty', 'immodest', 'inappropriate', 'unflattering', 'unbecoming', 'dowdy', 'frumpy', 'matronly', 'over-the-top', 'ostentatious', 'vulgar', 'tasteless', 'common', 'cheap', 'tawdry', 'garish', 'clashing', 'jarring', 'unseemly', 'unladylike', 'flamboyant', 'crass', 'bizarre', 'outlandish', 'ridiculous', 'absurd', 'preposterous', 'unattractive', 'unappealing', 'uninviting', 'dull', 'dreary', 'drab', 'dismal', 'showy', 'brash', 'saucy', 'cheeky', 'impertinent', 'in-your-face', 'obnoxious', 'off-putting', 'offensive', 'distasteful', 'unpleasant', 'unpalatable', 'unsavoury', 'unwholesome', 'lifeless', 'uninspired', 'unremarkable', 'ordinary', 'plain', 'mundane', 'monotonous', 'underwhelming', 'unexciting', 'uninspiring', 'lacklustre', 'colourless', 'characterless', 'unadventurous', 'unoriginal', 'predictable', 'forgettable', 'unmemorable', 'humdrum', 'unimpressive', 'uninteresting'];
const genre = ['EDM', 'heavy metal', 'hip hop', 'pop music', 'country music', 'acoustic music', 'alternative music', 'ambient music', 'blues', 'breakbeat', 'britpop', 'classical music', 'dance music', 'death metal', 'disco music', 'drum and bass', 'dubstep', 'electro', 'emo music', 'folk', 'funk', 'gangsta rap', 'garage music', 'goth music', 'grindcore', 'hardcore', 'house music', 'indie music', 'instrumental music', 'jazz', 'latin music', 'lo-fi', 'metalcore', 'new age music', 'new wave music', 'nu metal', 'opera', 'post-punk', 'power pop', 'psychedelic music', 'punk music', 'R&B', 'reggae', 'rock music', 'rockabilly', 'salsa', 'ska', 'soul music', 'swing music', 'synthpop', 'techno', 'thrash metal', 'trance music'];
const nametags = ['Ebrella', 'Esqoom', 'Wolfsbanee','Burnystuff','Herraaxx','jonong1004','LPWaffleman','Mr_Pirate','n0mn0mn0mau','PoisonerSG','uhdobbie','vodloser','arrenn75','cmkop76','darklordnegolas','dootfingers','draftpicked','epicizepic','GeekCulture','jo_jo_nyeb','Jusubox','saintogregory888','TastyOolong','tyco_kia','Xeronyxx','xGINTINGSx','XiaoMonster'];
const brightColors = ['#ff0000', '#0000ff', '#008000', '#b22222', '#ff7f50', '#9acd32', '#ff4500', '#2e8b57', '#daa520', '#d2691e', '#5f9ea0', '#1e90ff', '#ff69b4', '#8a2be2', '#01ff7f'];

function generateQuote() {
	const randomNametag = nametags[Math.floor(Math.random() * nametags.length)];
    const randomColor = brightColors[Math.floor(Math.random() * brightColors.length)];
	
    const randomWord1 = category[Math.floor(Math.random() * category.length)];
    const randomWord2 = adjective[Math.floor(Math.random() * adjective.length)];
    const randomWord3 = genre[Math.floor(Math.random() * genre.length)];

	const quote = `I came for the <span class="highlight">${randomWord1}</span>. Not wearing <span class="highlight">${randomWord2}</span> clothes and <span class="highlight">${randomWord3}</span>. I'm unfollowing. peace chat <3`;
    
    const quoteDisplay = document.getElementById('quoteDisplay');
    quoteDisplay.innerHTML = `
        <div class="quote-line">
            <div class="nametag" style="color: ${randomColor};">${randomNametag}:</div>
            <div class="quote">${quote}</div>
        </div>
    `;
	if (randomNametag === 'xGINTINGSx') {
        const image = document.createElement('img');
        image.src = 'img/KEKAlmost.png'; // Add the path to your image
        image.classList.add('easter-egg-image');
        quoteDisplay.querySelector('.quote').appendChild(image);
    }
}
function unfollow() {
const minusOne = document.createElement('div');
    minusOne.innerText = '-1';
    minusOne.classList.add('minus-one');
    document.body.appendChild(minusOne);

    const randomDeg = Math.random() * 180;
    const randomDistance = Math.random() * 200 + 200;
    const randomOpacity = Math.random() * 0.5 + 0.5;

    minusOne.style.transform = `translate(-50%, -50%) rotate(${randomDeg}deg) scale(2) translateY(-${randomDistance}px)`;
    minusOne.style.opacity = randomOpacity;

    setTimeout(() => {
        minusOne.remove();
    }, 1000);
}

document.getElementById('unfollow').addEventListener('click', unfollow);

generateQuote();