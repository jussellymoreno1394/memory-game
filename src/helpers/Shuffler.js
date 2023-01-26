export function shuffle (emojis) {
    for (let index = emojis.length - 1; index > 0; index--) {
        const randomize = Math.floor(Math.random() * (index + 1));
        [emojis[index], emojis[randomize]] = [emojis[randomize], emojis[index]];
    }
    return emojis;
}