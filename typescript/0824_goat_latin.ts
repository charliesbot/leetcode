const toGoatLatin = function(S: string) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  const words = S.split(" ");

  words.forEach((word, index) => {
    let newWord = word;
    if (vowels.has(word[0].toLowerCase())) {
      newWord = newWord + "ma";
    } else {
      newWord = newWord.slice(1) + word[0] + "ma";
    }

    for (let i = 0; i <= index; i++) {
      newWord = newWord + "a";
    }

    words[index] = newWord;
  });

  return words.join(" ");
};

toGoatLatin("I speak Goat Latin") === "Imaa peaksmaaa oatGmaaaa atinLmaaaaa";
toGoatLatin("The quick brown fox jumped over the lazy dog") ===
  "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa";
