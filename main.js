arrayLetters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
for (i = 0; i < arrayLetters.length; i++) {
  var buttons = $(
    `<button class = "${arrayLetters[i]}">${arrayLetters[i]}</button>`
  );
  $(buttons).appendTo($('.buttons'));
}
