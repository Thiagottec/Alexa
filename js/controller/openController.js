class OpenController {
    constructor() {
        this._inputPlayerstb = document.getElementById('tbodyPlayers');
        this._inputResultTb = document.getElementById('tbodyResult');
        this._inputJumptTb = document.getElementById('tbodyJump');
        this._inputHorarioJogo = document.getElementById('tbodyHorarioJogo');
    }

    randomPlayers(event) {
        event.preventDefault();
        let player1 = this.getPlayer();
        let player2 = this.getPlayer();

        this.insertPlayers(this._inputResultTb, player1, player2);
    }

    insertPlayers(resultadoTbody, Player1, Player2) {
        let resultRow = resultadoTbody.insertRow();

        resultRow.insertCell(0).innerHTML = '';
        resultRow.insertCell(1).innerHTML = Player1;
        resultRow.insertCell(2).innerHTML = 'x';
        resultRow.insertCell(3).innerHTML = Player2;
    }

    getPlayer() {
        let arrayPlayers = [];
        let playersTabRows = this._inputPlayerstb.rows;
        for (var i = 0; i < playersTabRows.length; i++) {
            arrayPlayers.push(playersTabRows[i].children[0].innerText);
        }

        let randonNumberPlayer = Math.floor(Math.random() * arrayPlayers.length);
        this._inputPlayerstb.deleteRow(randonNumberPlayer);

        return arrayPlayers[randonNumberPlayer];
    }

    sortearJogos(event) {
        event.preventDefault();

        let arrayJogos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        let resultBodyRow = this._inputResultTb.rows;
        let randomLength = resultBodyRow.length - 1;
        for (var i = 0; i < resultBodyRow.length; i++) {
            let randomNumber = Math.floor(Math.random() * randomLength);
            resultBodyRow[i].children[0].innerText = arrayJogos[randomNumber];
            arrayJogos.splice(randomNumber, 1);
            randomLength--;
        }
    }

    quemPula(event) {
        event.preventDefault();

        let arrayJogos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        let jogoQuePula1 = Math.floor(Math.random() * arrayJogos.length);
        this._inputJumptTb.insertRow().insertCell(0).innerHTML = arrayJogos[jogoQuePula1];
        arrayJogos.splice(jogoQuePula1, 1);
        let jogoQuePula2 = Math.floor(Math.random() * arrayJogos.length);
        this._inputJumptTb.insertRow().insertCell(0).innerHTML = arrayJogos[jogoQuePula2];
        arrayJogos.splice(jogoQuePula2, 1);
        let jogoQuePula3 = Math.floor(Math.random() * arrayJogos.length);
        this._inputJumptTb.insertRow().insertCell(0).innerHTML = arrayJogos[jogoQuePula3];
        arrayJogos.splice(jogoQuePula3, 1);
        let jogoQuePula4 = Math.floor(Math.random() * arrayJogos.length);
        this._inputJumptTb.insertRow().insertCell(0).innerHTML = arrayJogos[jogoQuePula4];
    }

    writeToLocalFile(event) {
        event.preventDefault();
        const downloadToFile = (content, filename, contentType) => {
            const a = document.createElement('a');
            const file = new Blob([content], { type: contentType });

            a.href = URL.createObjectURL(file);
            a.download = filename;
            a.click();

            URL.revokeObjectURL(a.href);
        };
        let exportFile = '';
        for (var i = 0; i < this._inputResultTb.rows.length; i++) {
            exportFile = exportFile + this._inputResultTb.rows[i].innerText + '\n';
        }
        exportFile = exportFile + '\n\n' + this._inputJumptTb.innerText;
        downloadToFile(exportFile, 'Open_Geneve.txt', 'text/plain');
    }

    sortearHorarios(event) {
        event.preventDefault();
        let arrayHorarios = [
            'Sábado 7h00 as 8h30',
            'Sábado 8h30 as 10h00',
            'Sábado 16h00 as 17h30',
            'Sábado 17h30 as 19h00',
            'Domingo 7h00 as 8h30',
            'Domingo 8h30 as 10h00',
            'Domingo 16h00 as 17h30',
            'Domingo 17h30 as 19h00',
            '1 Sábado 7h00 as 8h30',
            '1 Sábado 8h30 as 10h00',
            '1 Sábado 16h00 as 17h30',
            '1 Sábado 17h30 as 19h00',
            '1 Domingo 7h00 as 8h30',
            '1 Domingo 8h30 as 10h00',
        ];
        let arrayJogos = [
            'Gabriela Kobayashi	x	Fernanda Manente',
            'Pedro Bellucci	x	Marcos da Silva',
            'Breno Aguirre	x	Ricardo Cintra',
            'Adolpho Cardoso	x	Fernando Fonseca',
            'Marco Aurelio	x	Marcelo Basso',
            'Bruno Widmer	x	Alexis Aguirre',
            'Rafael Borghi	x	Enrico Aguirre',
            'Dario Moretti	x	Paulo Albuquerque',
            'Thiago Pereira	x	Carlos Bravo',
            'Anderson Félix Barbieri	x	Rafael D. Nogueir',
            'Rafael Leiria Nunes	x	Rodrigo Moretti',
            'Ricardo Villagelin	x	Andre Toriello',
            'Danilo Manente	x	Remolo',
            'Fabio José Quirino	x	Douglas Santana',
        ];
        let forValue = arrayHorarios.length;
        for (var i = 0; i < forValue; i++) {
            let indexHorario = Math.floor(Math.random() * arrayHorarios.length);
            let indexJogos = Math.floor(Math.random() * arrayJogos.length);
            let horariosJogosInserRows = this._inputHorarioJogo.insertRow();

            horariosJogosInserRows.insertCell(0).innerHTML = arrayHorarios[indexHorario];
            horariosJogosInserRows.insertCell(1).innerHTML = arrayJogos[indexJogos];
            arrayHorarios.splice(indexHorario, 1);
            arrayJogos.splice(indexJogos, 1);
        }
    }
}