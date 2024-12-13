const main_display = document.querySelector('main');
const div_select_colors = document.getElementById('div-select-color');
const crack_button = document.getElementById('crack-button');

let codeLength = 2;
let trys = 12;
let colors = ["green", "blue", "black", "orange"];

let random_code = [];
let crackTry = 1;


function initialisation() {
    random_code = [];
    crackTry = 1;
    main_display.innerHTML = '';
    div_select_colors.innerHTML = '';
  
    for (let i = 1; i <= trys; i++) {
        let div_try = document.createElement('div');
        div_try.setAttribute('id', 'try-'+i);
        div_try.setAttribute('class', 'try');
        let div_left = document.createElement('div');
        div_left.setAttribute('class', 'left');
        let div_right = document.createElement('div');
        div_right.setAttribute('class', 'right');

        for (let i = 1; i <= codeLength; i++) {
            let div_l = document.createElement('div');
            let div_r = document.createElement('div');
            div_left.append(div_l);
            div_right.append(div_r);
        }

        div_try.append(div_left);
        div_try.append(div_right);
        main_display.prepend(div_try);
        }
    }
    initialisation();


    for (let i = 1; i <= codeLength; i++) {
        let div_select_wrapper = document.createElement('div');
        div_select_wrapper.setAttribute('class', 'select-wrapper');
        let select = document.createElement('select');

        
        for (let color of colors) {
            let option = document.createElement('option');
            option.setAttribute('style', 'background-color:'+color);
            option.setAttribute('value', color);
            select.append(option);
        }
        select.setAttribute('style', 'background-color:'+colors[0]);

        select.addEventListener('change', (e) => {
            e.target.setAttribute('style', 'background-color:'+e.target.value);
        });

        div_select_wrapper.append(select);
        div_select_colors.append(div_select_wrapper);
    }


