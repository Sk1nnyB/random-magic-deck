import effectsimg from '../images/effects/no-effect-card.jpg';
import anim_pakal from '../images/effects/anim-pakal-thousandth-moon.jpg';
import balance from '../images/effects/balance.jpg';
import bedlam from '../images/effects/bedlam.jpg';
import black_lotus from '../images/effects/black-lotus.jpg';
import brainstorm from '../images/effects/brainstorm.jpg';
import captive_audience from '../images/effects/captive-audience.jpg';
import chaos_warp from '../images/effects/chaos-warp.jpg';
import colossal_dreadmaw from '../images/effects/colossal-dreadmaw.jpg';
import cultivate from '../images/effects/cultivate.jpg';
import food from '../images/effects/food.jpg';
import gamble from '../images/effects/gamble.jpg';
import island from '../images/effects/island.jpg';
import karlach from '../images/effects/karlach-fury-of-avernus.jpg';
import lightning_bolt from '../images/effects/lightning-bolt.jpg';
import mindslaver from '../images/effects/mindslaver.jpg';
import oko_thief_of_crowns from '../images/effects/oko-thief-of-crowns.jpg';
import phyrexian_arena from '../images/effects/phyrexian-arena.jpg';
import regrowth from '../images/effects/regrowth.jpg';
import secret_rendezvous from '../images/effects/secret-rendezvous.jpg';
import silence from '../images/effects/silence.jpg';
import slime_against_humanity from '../images/effects/slime-against-humanity.jpg';
import sol_ring from '../images/effects/sol-ring.jpg';
import swords_to_plowshares from '../images/effects/swords-to-plowshares.jpg';
import tibalt_the_fiend_blooded from '../images/effects/tibalt-the-fiend-blooded.jpg';
import tolarian_winds from '../images/effects/tolarian-winds.jpg';
import Tom_Mutinous_Mate from '../images/effects/Tom-Mutinous-Mate.jpg';
import toy_boat from '../images/effects/toy-boat.jpg';
import treasure from '../images/effects/treasure.jpg';
import Uno_Reverse_Card from '../images/effects/Uno-Reverse-Card.png';
import warp_world from '../images/effects/warp-world.jpg';
import wrath_of_god from '../images/effects/wrath-of-god.jpg';

var effects = [
  // Good Ones
  { id: 1, image: tolarian_winds, good: true, impactful: true, effect: "Discard your hand, then draw that many cards." },
  { id: 2, image: colossal_dreadmaw, good: true, impactful: true, effect: "Create a 6/6 green dinosaur creature token with trample named Colossal Dreadmaw." },
  { id: 3, image: effectsimg, good: true, impactful: true, effect: "You win! (No seriously)" },
  { id: 4, image: oko_thief_of_crowns, good: true, impactful: true, effect: "Create a token copy of Oko (the good one)." },
  { id: 5, image: effectsimg, good: true, impactful: true, effect: "Draw a card." },
  { id: 6, image: karlach, good: true, impactful: true, effect: "Create a token copy of one of the cast of BG3." },
  { id: 7, image: swords_to_plowshares, good: true, impactful: true, effect: "Create a copy of Swords to Plowshares. You may cast it." },
  { id: 8, image: brainstorm, good: true, impactful: true, effect: "Create a copy of Brainstorm. You may cast it." },
  { id: 9, image: phyrexian_arena, good: true, impactful: true, effect: "Create a copy of Phyrexian Arena. You may cast it." },
  { id: 10, image: lightning_bolt,  good: true, impactful: true, effect: "Create a copy of Lightning Bolt. You may cast it." },
  { id: 11, image: cultivate, good: true, impactful: true, effect: "Create a copy of Cultivate. You may cast it." },
  { id: 12, image: sol_ring, good: true, impactful: true, effect: "Create a copy of Sol Ring. You may cast it."},
  { id: 13, image: effectsimg, good: true, impactful: true, effect: "Tutor for a card, then each player votes on if that is a fair card to tutor for. If the vote passes or ties, keep it, otherwise shuffle it into your library." },
  { id: 14, image: black_lotus, good: true, impactful: true, effect: "Add 3 mana of any one colour to your mana pool." },
  { id: 15, image: secret_rendezvous, good: true, impactful: true, effect: "You and target opponent become lovers (You each draw 3 cards)." },
  { id: 16, image: regrowth, good: true, impactful: true, effect: "Return target card from your graveyard to your hand" },
  { id: 17, image: slime_against_humanity, good: true, impactful: true, effect: "Slime Against Humanity where X is the number of times this effect has happened this week."},
  { id: 18, image: Tom_Mutinous_Mate, good: true, impactful: true, effect: "Swing (You must attack this turn), steal (steal a nonland, noncreature permanent), plunder (sac a creature to draw two cards)." },
  { id: 19, image: toy_boat, good: true, impactful: true, effect: "Create a Toy Boat token (3/3 with the funny)." },
  { id: 20, image: Uno_Reverse_Card, good: true, impactful: false, effect: "Put an uno reverse card into your hand: (0 Mana, Instant, Counter target counterspell)" },
  { id: 50, image: gamble, good: true, impactful: true, effect: "Gamble (the card)." },
  { id: 51, image: island, good: true, impactful: false, effect: "If the host has given you a drink, create a tapped island." },
  { id: 52, image: food, good: true, impactful: false, effect: "If the host has given you food, create a food token." },
  { id: 53, image: effectsimg, good: true, impactful: true, effect: "Live (Gain 3 life), Laugh (Tap target creature) , Love (You cannot attack or be attacked until your next turn)." },
  { id: 64, image: effectsimg, good: true, impactful: true, effect: "Create a random anime hentai dragon token from Alex's shame stash." },
  { id: 65, image: bedlam, good: true, impactful: true, effect: "Create a copy of Bedlam. You may cast it." },
  { id: 66, image: effectsimg, good: true, impactful: true, effect: "Target a creature then either: Fuck (Unsleeve it and gain control of it until end of turn), Marry (Copy it), Kill (Destroy it)" },
  { id: 70, image: effectsimg, good: true, impactful: true, effect: "Crux of fake: Destroy all token creatures or destroy all nontoken creatures." },
  { id: 75, image: effectsimg, good: true, impactful: true, effect: "Create a copy of the last targeted removal spell used against you. It targets a legal permanent the original caster controls." },
  // Bad Ones
  { id: 21, image: tibalt_the_fiend_blooded, good: false, impactful: true, effect: "Create a token copy of Tibalt (the shit one)." },
  { id: 22, image: effectsimg, good: false, impactful: true, effect: "You lose! (lol)." },
  { id: 23, image: wrath_of_god, good: false, impactful: true, effect: "Destroy all creatures." },
  { id: 24, image: effectsimg, good: false, impactful: true, effect: "Sacrifice a permanent." },
  { id: 25, image: effectsimg, good: false, impactful: true, effect: "Goad all creatures." },
  { id: 26, image: effectsimg, good: false, impactful: true, effect: "Destroy all enchantments or artifacts." },
  { id: 27, image: effectsimg, good: false, impactful: true, effect: "Discard a card." },
  { id: 28, image: balance, good: false, impactful: true, effect: "Balance. (the card)" },
  { id: 29, image: silence, good: false, impactful: true, effect: "You cannot cast spells this turn."},
  { id: 30, image: effectsimg, good: false, impactful: true, effect: "If you cast more than 3 spells this turn, stop it. (You cannot cast more than 3 spells this turn)" },
  { id: 31, image: effectsimg, good: false, impactful: true, effect: "Unsleeve your commander." },
  { id: 32, image: effectsimg, good: false, impactful: true, effect: "Target creature you control becomes goaded. If you control no creatures, get fucked." },
  { id: 33, image: effectsimg, good: false, impactful: false, effect: "Gain 1 life." },
  { id: 34, image: effectsimg, good: false, impactful: false, effect: "Nothing happened? Ah well." },
  { id: 35, image: effectsimg, good: false, impactful: false, effect: "You cannot cast counterspells until your next turn." },
  { id: 54, image: effectsimg, good: false, impactful: false, effect: "Attach to yourself a curse token named 'Or' with 'Whenever you point at a card, you lose 1 life.'" },
  { id: 55, image: effectsimg, good: false, impactful: true, effect: "Until your next turn, whenever you tell a shit joke you must either lose 3 life, discard a card or sacrifice a permanent." },
  { id: 67, image: effectsimg, good: false, impactful: false, effect: "Sacrifice one of your commander only cards." },
  { id: 68, image: captive_audience, good: false, impactful: true, effect: "Create a copy of Captive Audience. Good luck :)" },
  { id: 69, image: effectsimg, good: false, impactful: true, effect: "Each player secretly votes for a non-land permanent you control. If there is a tie no permanents are destroyed. Otherwise, destroy the highest voted permanent." },
  { id: 71, image: effectsimg, good: false, impactful: true, effect: "Turn target non-commander creature you control into an elk." },
  { id: 72, image: mindslaver, good: false, impactful: true, effect: "Target opponent controls your next turn." },
  // Funny Ones
  { id: 36, image: chaos_warp, good: false, impactful: true, effect: "Chaos warp one of your permanents." },
  { id: 37, image: warp_world, good: false, impactful: true, effect: "Warp world. (The card)" },
  { id: 38, image: effectsimg, good: false, impactful: false, effect: "Compliment an opponent." },
  { id: 39, image: effectsimg, good: false, impactful: false, effect: "Insult an opponent or lose 3 life." },
  { id: 40, image: effectsimg, good: true, impactful: true, effect: "Target player gets you a drink."},
  { id: 41, image: anim_pakal, good: true, impactful: true, effect: "Destroy target creature named 'Anim Pakal, Thousandth Moon', otherwise reroll." },
  { id: 42, image: effectsimg, good: true, impactful: true, effect: "Starting from you, each player may put a card from their hand onto the battlefield. It is not cast." },
  { id: 43, image: effectsimg, good: true, impactful: false, effect: "Increase or decrease the score of up to one deck of your choice on the dick rankings." },
  { id: 44, image: effectsimg, good: false, impactful: false, effect: "Shuffle your graveyard into your library, then mill that many cards." },
  { id: 45, image: effectsimg, good: false, impactful: false, effect: "Exchange graveyards with target opponent." },
  { id: 46, image: effectsimg, good: true, impactful: true, effect: "Rock-paper-scissors an opponent. If you win, you gain 3 life, create 3 mana of any one colour and put 3 +1/+1 counters on each creature you control." },
  { id: 47, image: effectsimg, good: false, impactful: false, effect: "Players vote for the most annoying player this game; that player creates a loser role and attaches it to themselves (a player with a loser role is a loser)." },
  { id: 48, image: effectsimg, good: false, impactful: false, effect: "Until the end of your turn, narrate the game as if you were on Game Knights." },
  { id: 49, image: treasure, good: true, impactful: true, effect: "Each player votes on if target creature has drip. If that creature does have drip, the owner creates 2 treasure tokens." },
  { id: 56, image: effectsimg, good: true, impactful: true, effect: "If the current song playing is a bop, draw a card. Otherwise, discard a card." },
  { id: 57, image: effectsimg, good: true, impactful: false, effect: "Tell everyone how your day is going." },
  { id: 58, image: effectsimg, good: true, impactful: true, effect: "Choose up to one permanent that costs too much money and exile it. You cannot prevent it no matter how much you rules lawyer." },
  { id: 59, image: effectsimg, good: true, impactful: false, effect: "Choose Dragons or Khans. If you choose dragons, make a food token named 'nuts'. If you choose Khans, clash with an opponent. If you win create a 2/2 white barbarian token." },
  { id: 60, image: effectsimg, good: false, impactful: false, effect: "Indicate (the card)." },
  { id: 61, image: effectsimg, good: true, impactful: true, effect: "Add X white mana, where X is the number of salty opponents." },
  { id: 62, image: effectsimg, good: false, impactful: false, effect: "Shuffle your library." },
  { id: 63, image: effectsimg, good: false, impactful: false, effect: "You can do longer do the scry rule for the rest of the game." },
  { id: 73, image: effectsimg, good: false, impactful: false, effect: "Exchange hands with a random opponent." }
]


export default effects;

// Total count: 74
