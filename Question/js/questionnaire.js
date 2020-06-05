document.getElementById('procbutton').addEventListener('click', function() {
    document.querySelector('.tc-bg').style.display= 'flex';
});

document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.tc-bg').style.display='none';
});


document.getElementById('subbutton').addEventListener('click', 
function() {
    document.querySelector('.tc-pop').style.display='none';
});


document.getElementById('subbutton').addEventListener('click', 
function() {
        document.querySelector('.tynote').style.display='block';
});