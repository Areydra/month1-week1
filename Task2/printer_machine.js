array_command = [true, true, false]
array_alphabet = ['A', 'B', 'C']
array_command_length = array_command.length

for (i = 0; i < array_command.length; i++ ){
    (array_alphabet[i] == undefined) ? console.log('Indeks array_command dan array_alphabet tidak sama') : '';
    (array_command[i] == true && array_command_length == array_alphabet.length) ? console.log(array_alphabet[i]) : '';
}
