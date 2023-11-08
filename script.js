 function redactText() {
    const textContent = document.getElementById("text-content").value;
    const wordsToRedact = document.getElementById("words-to-redact").value.split(' ');
    const selectedOption  = document.getElementById("redact-option").value
const startTime = new Date().getTime();
    document.getElementById("formArea").addEventListener("submit", (e) => e.preventDefault());

    if (!textContent) {
                alert("Please enter text to scramble.");
                return;
            }
        
            if (wordsToRedact.length === 0) {
                alert("Please specify words to scramble.");
               return;
             }

let redactedText = textContent;
let wordsScrambled = 0;
let charactersScrambled = 0;

for (const word of wordsToRedact) {
    const regex = new RegExp(word, 'gi');
    
    redactedText = redactedText.replace(regex, match => {

        wordsScrambled++;
        charactersScrambled += match.length;
        return selectedOption.repeat(match.length);
    });
}
const endTime = new Date().getTime();
const elapsedTimeInSeconds = (endTime - startTime) / 1000;

document.getElementById("redacted-text").textContent = redactedText;

const statistics = `Words Scanned: ${wordsToRedact.length}, Words Matched: ${wordsScrambled}, Time Taken: ${elapsedTimeInSeconds} seconds, Characters Scrambled: ${charactersScrambled}`;
document.getElementById("statistics").textContent = statistics;
}


