var array =    [["BMW","BLUE","2019"],
                ["AUDI","WHITE","2018"],
                ["SUZUKI","WHITE","2018"],
                ["TOYOTA","BLUE","2021"],
                ["MINI-COOPER","GREEN","2021"]],
                fetch = document.getElementById('fetch');
        for(var i=0; i <array.length; i++){
            var newRow = fetch.insertRow(fetch.length);
            for(var j=0; j<array[i].length; j++){
                var cell = newRow.insertCell(j);
                cell.innerHTML = array[i][j];
            }
        }