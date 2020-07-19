
(function () {
    var topBlock = document.querySelectorAll('.top__wrapper input');
    var operationsBlock = document.querySelectorAll('.bottom__wrapper button');
    var output = document.querySelector('.top__output');
    var clearBtn = document.querySelector('.clear');
    var equalsBtn = document.querySelector('.equals');
    var operation = 'plus';

    for (var i = 0; i < operationsBlock.length; i++) {
        operationsBlock[i].onclick = function () {
            for (var i = 0; i < operationsBlock.length; i++) {
                if (operationsBlock[i].classList.contains('active')) {
                    operationsBlock[i].classList.remove('active');
                }
            }
            this.classList.toggle('active');
            operation = this.getAttribute('data-btn');
        }
    }

    for (var i = 0; i < topBlock.length; i++) {
        topBlock[i].addEventListener('input', function (event) {
            for (var i = 0; i < topBlock.length; i++) {
                if (topBlock[0].value != '' && topBlock[1].value != '') {
                    equalsBtn.disabled = false;
                    console.log(topBlock[0].value);
                    console.log(topBlock[1].value);
                } else {
                    equalsBtn.disabled = true;
                }
            }
        })
    }
    equalsBtn.onclick = function () {
        var result = '';
        switch (operation) {
            case 'plus':
                result = parseInt(topBlock[0].value) + parseInt(topBlock[1].value)
                output.textContent = result;
                break;
            case 'minus':
                result = parseInt(topBlock[0].value) - parseInt(topBlock[1].value)
                output.textContent = result
                break;
            case 'multupl':
                result = parseInt(topBlock[0].value) * parseInt(topBlock[1].value);
                output.textContent = result;
                break;
            case 'divide':
                result = parseInt(topBlock[0].value) / parseInt(topBlock[1].value);
                output.textContent = result.toFixed(3);
                break;
        }
    }

    clearBtn.addEventListener('click', function () {
        equalsBtn.disabled = true;
        output.textContent = '';
        for (var i = 0; i < topBlock.length; i++) {
            topBlock[i].value = '';
        }
        for (var i = 0; i < operationsBlock.length; i++) {
            operationsBlock[i].classList.remove('active');
            operationsBlock[0].classList.add('active');
        }
    })

})();

