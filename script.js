document.querySelector('button').onclick = function(event) {
    event.preventDefault();
    let colorValue = document.querySelector('#color');
    if (colorValue.value == '#000000') {
        window.location="index.html";
    } else {
        alert('Нет, попробуй еще... Может в какой-нибудь угол? :3 ');
    };
};
