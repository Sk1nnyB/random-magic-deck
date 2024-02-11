
function getRandomEntry(array) {
    var entry = Math.floor(Math.random() * array.length);
    return array[entry];
};

var decks_1 = ["Alesha, Who Smiles at Death"];
var decks_2 = ["Ranar the Everwatching"];
var decks_3 = ["Gimbal", "Baral", "Osgir", "Frodo / Sam", "Eowyn", "Sauron", "Galadriel", "Borukkos", "Tegwyll"];
var decks_4 = ["Isshin", "Sephara", "Abaddon", "Marneus", "Illuna (Bens)", "Roon", "Gisath", "Magnus"];
var decks_5 = ["Lara Croft", "Prosper", "Adrix and Nev", "Ardenn / Rograkh", "Necrons?", "Arjun", "Meria (are u sure?)", "Varina", "Kykar"];
var decks_6 = ["Hakbal", "Saturo", "Admiral Beckett Brass", "Zedru", "Ellivere", "Aegar", "Trynn/Sylvar", "Strefan", "Syr Gwynn"];
var decks_7 = ["Rin and Seri", "Tasha", "Estrid", "Illuna (Harrys)", "Anim Pakal", "Aminatou", "Kwain", "Kozilek", "Sisay", "Krenko", "Sefris", "Gisela"];
var decks_8 = ["Sidisi", "Freyalise", "Okaun / Zndrsplt", "Rashmi", "Norin", "Ghysern Starn", "Davros", "Sloguurk"];
var decks_9 = ["Tuvasa", "The Scarab God", "Meren", "Lord Windgrace"];
var decks_10 = ["Miirym", "Scion", "Yarok", "Veyran"];
var decks_11 = ["Jhoira", "Go outside."];

var effects = ["Target player gets you a drink"];

document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the input value
    var inputNumber = document.getElementById('powerLevel').value;

    var responses = {
        1: getRandomEntry(decks_1),
        2: getRandomEntry(decks_2),
        3: getRandomEntry(decks_3),
        4: getRandomEntry(decks_4),
        5: getRandomEntry(decks_5),
        6: getRandomEntry(decks_6),
        7: getRandomEntry(decks_7),
        8: getRandomEntry(decks_8),
        9: getRandomEntry(decks_9),
        10: getRandomEntry(decks_10),
        11: getRandomEntry(decks_11),
    };

    // Display the response
    var responseDiv = document.getElementById('deck_response');
    if (responses.hasOwnProperty(inputNumber)) {
        responseDiv.textContent = responses[inputNumber];
    } else {
        responseDiv.textContent = 'No deck found.';
    }
});


document.getElementById('effectForm').addEventListener('submit', function(event) {
    event.preventDefault();

    response = getRandomEntry(effects);
    // Display the response
    var responseDiv = document.getElementById('effect_response');
    responseDiv.textContent = response;

});