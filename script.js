const buttons = document.querySelectorAll(".button");
console.log(buttons);
const body = document.querySelector("body");
console.log(body);

buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        console.log(event);
        console.log(event.target);
        console.log(event.target.id);
        switch (event.target.id) {
            case 'grey':
                body.style.backgroundColor = 'grey';
                break;
            case 'white':
                body.style.backgroundColor = 'white'
                break;
            case 'blue':
                body.style.backgroundColor = 'blue';
                break;
            case 'yellow':
                body.style.backgroundColor = 'yellow'
                break;
            default:
                console.log("error");
                break;
        }
    })
})