window.addEventListener('load', function(){
    const 
        one = document.querySelector('#a1')
        two = document.querySelector('#a2')
        three = document.querySelector('#a3')
        four = document.querySelector('#a4')
        five = document.querySelector('#a5')
        six = document.querySelector('#a6')
        seven = document.querySelector('#a7')
        eaght = document.querySelector('#a8')
        nine = document.querySelector('#a9')
        zero = document.querySelector('#a0')
        dot = document.querySelector('#aDot')
        multiplus = document.querySelector('#umnoj') 
        mod = document.querySelector('#mod')
        minus = document.querySelector('#minus')
        plus = document.querySelector('#plus') 
        res = document.querySelector('#res')
        pm = document.querySelector('#plusminus')
        fNumber = document.querySelector('#first')
        sNumber = document.querySelector('#second')
        sgNumber = document.querySelector('#single')
        C = document.querySelector('#C')
        Ce = document.querySelector('#Ce')
        d = document.querySelector('#d')
        showing = document.querySelector('#showing')
        result = document.querySelector('#result')

    let first = '',
        second = '',
        i = 0,
        single = ''

    let blockRes = document.createElement('div')

    clearingItem = [
        C,
        Ce,
        d
    ].forEach(function(item){
        item.addEventListener('click', function(){
            if (this == C){
                sNumber.innerText = ''
                fNumber.innerText = ''
                sgNumber.innerText = ''
                first = ''
                second = ''
                i = 0
                single = ''
                blockRes.innerText = ''
            }else if (this == Ce){
                if (second == ''){
                    first = ''
                    single = ''
                    fNumber.innerText = ''
                    sgNumber.innerText = ''
                    i = 0
                }
                if (single != ''){
                    second = '' 
                    sNumber.innerText = ''
                    i = 1
                } 
            }else if (this == d){
                if (i == 0){
                    first = first.slice(0, -1)
                    fNumber.innerText = first
                }else if (i == 1){
                    second = second.slice(0, -1)
                    sNumber.innerText = second
                }
                
            }
        })
    })

    tools = [
        mod,
        minus,
        plus,
        multiplus,
        pm
    ].forEach(function(item){

        item.addEventListener('click', function(){
            if (first != '' && second == '' && this != pm){
                i = 1
                single = this.innerText
                sgNumber.innerHTML = single
            }else if (this == pm){
                if (single == '+'){
                    single = '-'
                    sgNumber.innerText = '-'
                }else if (single == '-'){
                    single = '+'
                    sgNumber.innerText = '+'
                }
            }
        })
    })

    numbers = [
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
        dot
    ].forEach(function(el){

        el.addEventListener('click', function(){
            if (i == 0){
                first += this.innerText
                fNumber.innerText = first
            }else if(i == 1){
                second += this.innerText
                sNumber.innerText = second
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
                first = ''
                second = ''
                i = 0
                single = ''

                result.append(blockRes)
    }
})
