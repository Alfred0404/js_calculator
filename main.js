const keys = document.querySelectorAll('.key')
const output = document.querySelector('.output>h1')

let buffer
let calcul = []


function handle_calcul(num_string) {

    if (num_string === 'C') {
        calcul = []
        output.textContent = '0'
    }
    else if (num_string === 'del') {
        calcul.pop()
        buffer = calcul.join('')
        output.textContent = buffer
    }
    else if (num_string === '=') {
        output.textContent = eval(buffer)
    }
    else {
        calcul.push(num_string)
        buffer = calcul.join('')
        output.textContent = buffer
    }


}

keys.forEach(key => {
    key.addEventListener('click', () => handle_calcul(key.textContent))
})