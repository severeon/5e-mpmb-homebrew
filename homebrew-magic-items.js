/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*  -INFORMATION-
	Subject:	Magic Item
	Effect:		This script adds a magical mask called "Nall's Mask of Vanishing"
				This is a homebrew item that is not published anywhere
	Code by:	Thomas Quick
	Date:		2023-03-26 (sheet v13.0.0)
*/

var iFileName = "Homebrew Items - MagicItemsList.js";
RequiredSheetVersion(13);

MagicItemsList["nall's-mask-of-vanishing-hb"] = {
	name : "Nall's Mask of Vanishing",
	source : [["HB", 0]],
	type : "wondrous item",
	rarity : "very rare",
	description : "While worn I am hidden from divination magic, cannot be the target of divination magic or found by scrying.  Once per LR I may cast Dimension Door as a 3rd level spell without expending a spell slot.  A cloud of smoke lightly obscures the space I exit and appear; it disapates at the end of my turn.",
	action : [["action", " (Dimension Door)"]],
	weight : 1,
    spellcastingBonus : [{
        name : "Nall's Mask of Vanishing",
        spells : ["dimension door"],
        selection : ["dimension door"],
        firstCol : "oncelr"
    }],
	magicItemComponents : false,
	allowUpcasting : false,
	attunement : true,
    usages : 1,
    recovery : "long rest"
};

MagicItemsList["scythe of the frozen soul"] = {
	name : "Scythe of the Frozen Soul",
	source : [["HB", 0]],
    regExpSearch: /^(?=.*scythe)(?=.*frozen)(?=.*soul).*$/i,
	type : "weapon",
    rarity : "legendary",
    attunement : true,
    weight : 10,
    description : "You gain a +1 to attack and damage rolls made with this magic weapon.  When you hit a creature with it, the creature takes an extra 1d12 cold damage. On a hit, the weapon scores a critical hit on a roll of 19 or 20.",
    weaponOptions : {
        regExpSearch : /^(?=.*scythe)(?=.*frozen)(?=.*soul).*$/i,
        name : "Scythe of the Frozen Soul",
        source : [["HB", 0]],
        ability : 1,
        type : "Martial",
        damage : [1, 4, "slashing"],
        range : "Melee",
        description : "Versatile (1d6), Extra 1d12 cold damage on hit, score a critical hit on a 19 or 20",
        abilitytodamage : true,
        weight : 10,
        modifiers : ["Proficiency", "Str"]
    }
};

MagicItemsList["arcanite reaver"] = {
    name: "Arcanite Reaver",
    source: ["HB", 0],
    type: "weapon (mechanical scythe)",
    rarity: "legendary",
    attunement: "attunement by a robotic creature",
    description: "As an action, I can charge the scythe for 10 min (1/short rest). While charged, I can use an action to unleash a 3d6 force damage blast (10-ft cone, Dex save DC 14 for half). The scythe drains 1 temporary HP on a hit and grants advantage on disarm attempts. It also sheds bright light for 20 ft and dim light for another 20 ft.",
    weaponOptions: {
        regExpSearch: /arcanite reaver/i,
        name: "Arcanite Reaver",
        source: ["HB", 0],
        list: "melee",
        ability: 1,
        type: "Slashing",
        damage: [1, 10, "slashing"],
        range: "Melee",
        weight: 6,
        isMagicWeapon: true,
        notLegalAL: true,
    },
    eval: function (oldEvals) {
        AddAction("action", "Charge Arcanite Reaver (1/short rest)", "Arcanite Reaver");
        AddAction("action", "Force Blast (10-ft cone, 3d6 force, Dex save DC 14 for half)", "Arcanite Reaver");
        AddAction("action", "Drain Energy (1 temporary HP on hit)", "Arcanite Reaver");
    },
    removeeval: function (oldEvals) {
        RemoveAction("action", "Charge Arcanite Reaver (1/short rest)");
        RemoveAction("action", "Force Blast (10-ft cone, 3d6 force, Dex save DC 14 for half)");
        RemoveAction("action", "Drain Energy (1 temporary HP on hit)");
    },
};

/**
 * Minor Golemheart
Wondrous Item (requires attunement by an Artificer)

This small, intricately carved clockwork heart is designed to be implanted into a homunculus servant, granting it additional power and resilience.

When you attune to this item, you can use your Artificer’s tools to implant the Minor Golemheart into a homunculus servant, taking 1 hour to complete the procedure. Once implanted, the homunculus gains the following benefits:

Its hit point maximum increases by 10, and it gains resistance to one damage type of your choice (acid, cold, fire, lightning, poison, or thunder).
Its Dexterity score increases by 1, to a maximum of 20.
Its attacks deal an additional 1d4 force damage.
Additionally, while the Minor Golemheart is implanted, you can communicate telepathically with the homunculus, even if it is more than 100 feet away from you.

Once implanted, the Minor Golemheart cannot be removed from the homunculus without causing it to be destroyed. If the homunculus is destroyed, you can retrieve the Minor Golemheart and implant it into another homunculus servant.
 */
MagicItemsList["minor golemheart"] = {
    name : "Minor Golemheart",
    source : [["HB", 0]],
    type : "wondrous item",
    rarity : "rare",
    attunement : true,
    descriptionLong: "This small, intricately carved clockwork heart is designed to be implanted into a homunculus servant, granting it additional power and resilience. When you attune to this item, you can use your Artificer's tools to implant the Minor Golemheart into a homunculus servant, taking 1 hour to complete the procedure. Once implanted, the homunculus gains the following benefits: "+
    "\nIts hit point maximum increases by 10"+
    "\nit gains resistance to one damage type of your choice (acid, cold, fire, lightning, poison, or thunder)"+
    "\nIts Dexterity score increases by 1, to a maximum of 20"+
    "\nIts attacks deal an additional 1d4 force damage"+
    "\nAdditionally, while the Minor Golemheart is implanted, you can communicate telepathically with the homunculus, even if it is more than 100 feet away from you."+ 
    "\nOnce implanted, the Minor Golemheart cannot be removed from the homunculus without causing it to be destroyed."+
    "\nIf the homunculus is destroyed, you can retrieve the Minor Golemheart and implant it into another homunculus servant.",
    description: "When you attune to this item and implant it into a homunculus servant (1hr), its max HP increases by 10, it gains +1 dex to a max of 20, +1d4 force damage on attack, and telepathic communication",
    companionCallback: [function(prefix, oCrea, bAdd, sCompType) {
        
    }, ""]
};