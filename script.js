const one = document.querySelector('#a1')
const two = document.querySelector('#a2')
const three = document.querySelector('#a3')
const four = document.querySelector('#a4')
const five = document.querySelector('#a5')
const six = document.querySelector('#a6')
const seven = document.querySelector('#a7')
const eaght = document.querySelector('#a8')
const nine = document.querySelector('#a9')
const zero = document.querySelector('#a0')
const dot = document.querySelector('#aDot')
const multiplus = document.querySelector('#umnoj')
const mod = document.querySelector('#mod')
const minus = document.querySelector('#minus')
const plus = document.querySelector('#plus')
const res = document.querySelector('#res')
const pm = document.querySelector('#plusminus')

const fNumber = document.querySelector('#first')
const sNumber = document.querySelector('#second')
const sgNumber = document.querySelector('#single')
const C = document.querySelector('#C')
const Ce = document.querySelector('#Ce')
const d = document.querySelector('#d')

const result = document.querySelector('#result')
const showing = document.querySelector('#showing')

let div = document.createElement('div')

let first = 'p',
    second = 'p',
    i = 0,
    j = 0,
    single = '',
    ml = 0

let blockRes = document.createElement('div')

let numbers = [
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eaght,
    nine,
    zero,
    dot,
    pm
]

let tools = [
    mod,
    minus,
    plus,
    multiplus
]

let clearingItem = [
    C,
    Ce,
    d
]

clearingItem.forEach(function(item){
    item.addEventListener('click', function(){
        if(this.innerText == 'C'){
            sNumber.innerText = ''
            fNumber.innerText = ''
            sgNumber.innerText = ''
            first = 'p'
            second = 'p'
            i = 0
            j = 0
            single = ''
        }else if(this.innerText == 'Ce'){
            if(i == 1){
                second = 'p'
                sNumber.innerText = ''
                j = 0
            }else{
                first = 'p'
                fNumber.innerText = ''
                i = 0
            }
        }
    })
})

tools.forEach(function(item){
    item.addEventListener('click', function(){
        console.log(first)
        if(first == 'p'){
            sgNumber.innerHTML = ''
        }else{
            single = this.innerText
            i = 1
            sgNumber.innerHTML = single
        }

    })
})

numbers.forEach(function(el){

    el.addEventListener('click', function(){
        if (i == 0) {
            if (first == 'p' && this.innerText != '+-'){
                first = this.innerText
                fNumber.innerText = first
            }else {
                if (this.innerText == '+-' && first != 'p') {
                    first = -first
                    fNumber.innerText = first
                } else if(first != 'p'){
                    first = first + this.innerText
                    fNumber.innerText = first
                }else{
                    fNumber.innerText = ''
                }
            }
        }else if(i == 1) {
            if (second == 'p' && this.innerText != '+-'){
                second = this.innerText
                sNumber.innerText = second
            }else{
                if (this.innerText == '+-' && second != 'p'){
                    second = -second
                    sNumber.innerText = second
                }else if(second != 'p'){
                    second = second + this.innerText
                    sNumber.innerText = second
                }else{
                    sNumber.innerText = ''
                }
            }
            j++
        }
    })
})

res.addEventListener('click', getNumber)

function getNumber(){
    first = parseFloat(first)
    second = parseFloat(second)
        if (single == '+') {
            blockRes.innerText = `${first + second}`
        }else if(single == '-'){
            blockRes.innerText = `${first - second}`
        }else if(single == '*'){
            blockRes.innerText = `${first * second}`
        }else if(single == '/'){
            blockRes.innerText = `${first / second}`
        }
            sNumber.innerText = ''
            fNumber.innerText = ''
            sgNumber.innerText = ''
            first = 'p'
            second = 'p'
            i = 0
            j = 0
            single = ''

            result.append(blockRes)
}