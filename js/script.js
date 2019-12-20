document.getElementById('valueNumb').addEventListener('input', (event) => {

    let km = event.target.value;
        document.getElementById('show-km').innerHTML = km * 1000;

        document.getElementById('show-sm').innerHTML = km * 100000;

        document.getElementById('show-mm').innerHTML = km * 1000000;

});


