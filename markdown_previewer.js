function updatePreview() {
  let newText = marked(document.getElementById('editor').value);
  document.getElementById('preview').innerHTML = newText;
}
let defaultText = '# This is a header<br>\n## This is a sub header<br>\nThis is a link: [link](https://www.freecodecamp.org/)<br>\nThis is inline code `<div></div>`<br>\nThis is  a code block:\n```\n<div>\n\t<div></div>\n</div>\n```\n- This is\n\t- a\n\t\t- list\n\n> This is a blockquote\n\nThis is **bolded text**<br>\nThis is an image:<br>\n<img src="https://ih1.redbubble.net/image.612407354.5561/flat,750x,075,f-pad,750x1000,f8f8f8.jpg" width=200px>'

$( document ).ready(function() {
    document.getElementById('editor').innerHTML = defaultText;
    updatePreview();
});
