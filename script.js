function appendNumber(number) {
    const display = document.getElementById('display');
    display.value += number;
}

function appendOperation(operation) {
    const display = document.getElementById('display');
    display.value += ` ${operation} `;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
    document.getElementById('resultado').innerText = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
    
        const result = eval(display.value);
        console.log(result);

       
        document.getElementById('resultado').innerText = "já existe um usuário com esse resultado";
    } catch (error) {
        document.getElementById('resultado').innerText = "Erro na expressão";
    }
}
