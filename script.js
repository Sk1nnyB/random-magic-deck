
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
var decks_7 = ["Omnath", "Buttercup", "Rin and Seri", "Tasha", "Estrid", "Illuna (Harrys)", "Flamewar", "Anim Pakal", "Aminatou", "Kwain", "Kozilek", "Sisay", "Krenko", "Sefris", "Gisela"];
var decks_8 = ["Sidisi", "Freyalise", "Okaun / Zndrsplt", "Rashmi", "Norin", "Ghysern Starn", "Davros", "Sloguurk"];
var decks_9 = ["Tuvasa", "The Scarab God", "Meren", "Lord Windgrace"];
var decks_10 = ["Miirym", "Scion", "Yarok", "Veyran"];
var decks_11 = ["Jhoira", "Go outside."];

var effects = [
    // Good Ones
    "Discard your hand, then draw that many cards.",
    "Create a 6/6 green dinosaur creature token with trample named Colossal Dreadmaw.",
    "You win! (No seriously)",
    "Create a token copy of Oko (the good one).",
    "Draw a card.",
    "Create a token copy of one of the cast of BG3.",
    "Create a copy of Swords to Plowshares. You may cast it.",
    "Create a copy of Brainstorm. You may cast it.",
    "Create a copy of Phyrexian Arena. You may cast it.",
    "Create a copy of Lightning Bolt. You may cast it.",
    "Create a copy of Cultivate. You may cast it.",
    "Create a copy of Sol Ring. You may cast it.",
    "Tutor for a card, then each player votes on if that is a fair card to tutor for. If the vote passes or ties, keep it, otherwise shuffle it into your library.",
    "Add 3 mana of any one colour to your mana pool.",
    "You and target opponent become lovers (You each draw 3 cards).",
    "Return target card from your graveyard to your hand",
    "Slime Against Humanity where X is the number of times this effect has happened this turn.",
    "Swing (You must attack this turn), steal (steal a nonland permanent), plunder (sac a creature to draw two cards).",
    "Create a Toy Boat token (3/3 with the funny).",
    // Bad Ones
    "You cannot cast counterspells until your next turn.",
    "Target creature you control becomes goaded. If you control no creatures, get fucked.",
    "You lose! (lol).",
    "Create a token copy of Tibalt (the shit one).",
    "Sacrifice a permanent.",
    "Gain 1 life.",
    "Nothing happened? Ah well.",
    "Destroy all creatures.",
    "Goad all creatures.",
    "Destroy all enchantments or artifacts.",
    "Discard a card.",
    "Balance. (the card)",
    "You cannot cast spells this turn.",
    "If you cast more than 3 spells this turn, stop it. (You cannot cast more than 3 spells this turn)",
    // Funny Ones
    "Chaos warp one of your permanents.",
    "Compliment an opponent.",
    "Insult an opponent or lose 3 life.",
    "Target player gets you a drink.",
    "Destroy target creature named Anim Pakal, otherwise reroll.",
    "Starting from you, each player may put a card from their hand onto the battlefield. It is not cast.",
    "Increase or decrease the score of up to one deck of your choice on the dick rankings.",
    "Shuffle your graveyard into your library, then mill that many cards.",
    "Rock-paper-scissors an opponent. The winner gains 3 life, creates 3 mana of any one colour and puts 3 +1/+1 counters among creatures they control.",
    "Players vote for the most annoying player this game; that player creates a loser role and attaches it to themselves (a player with a loser role is a loser).",
    "Each player votes for if a creature has drip. If that creature does have drip, the owner creates 2 treasure tokens.",
    "Until your next turn, narrate the game as if you were on Game Knights.",
    "Exchange graveyards with target opponent."
]

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