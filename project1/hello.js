const button = document.querySelectorAll('.button')
const body = document.querySelector("body")
button.forEach(element => {
    element.addEventListener('click', function(event){
        if(event.target.id === 'grey'){
            body.style.backgroundColor = 'grey'
        }
        if(event.target.id === 'white'){
            body.style.backgroundColor = event.target.id
        }
        if(event.target.id === 'blue'){
            body.style.backgroundColor = event.target.id
        }
        if(event.target.id === 'yellow'){
            body.style.backgroundColor = event.target.id
        }
    })

});