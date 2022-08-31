const heroes = ['Abaddon', 'Alchemist', 'Axe', 'Beastmaster', 'Brewmaster', 'Bristleback', 'Centaur Warrunner', 'Chaos Knight', 'Clockwerk', 'Dawnbreaker', 'Doom', 'Dragon Knight', 'Earth Spirit', 'Earthshaker', 'Elder Titan', 'Huskar', 'Io', 'Kunkka', 'Legion Commander', 'Lifestealer', 'Lycan', 'Magnus', 'Marci', 'Mars', 'Night Stalker', 'Omniknight', 'Phoenix', 'Primal Beast', 'Pudge', 'Sand King', 'Slardar', 'Snapfire', 'Spirit Breaker', 'Sven', 'Tidehunter', 'Timbersaw', 'Tiny', 'Treant Protector', 'Tusk', 'Underlord', 'Undying', 'Wraith King', 'Antimage', 'Arc Warden', 'Bloodseeker', 'Bounty Hunter', 'Broodmother', 'Clinkz', 'Drow Ranger', 'Ember Spirit', 'Faceless Void', 'Gyrocopter', 'Hoodwink', 'Juggernaut', 'Lone Druid', 'Luna', 'Medusa', 'Meepo', 'Mirana', 'Monkey King', 'Morphling', 'Naga Siren', 'Nyx Assassin', 'Pangolier', 'Phantom Assassin', 'Phantom Lancer', 'Razor', 'Riki', 'Shadow Fiend', 'Slark', 'Sniper', 'Spectre', ' Templar Assassin', 'Terrorblade',
 'Troll Warlord', 'Ursa', 'Vengeful Spirit', 'Venomancer', 'Viper', 'Weaver', 'Ancient Apparition', 'Bane', 'Batrider', 'Chen', 'Crystal Maiden', 'Dark Seer', 'Dark Willow', 'Dazzle', 'Death Prophet', 'Disruptor', 'Enchantress', 'Enigma', 'Grimstroke', 'Invoker', 'Jakiro', 'Keeper of The Light', 'Leshrac', 'Lich', 'Lina', 'Lion', "Nature's Prophet", 'Necrophos', 'Ogre Magi', 'Oracle', 'Outworld Destroyer', 'Puck', 'Pugna', 'Queen of Pain', 'Rubick', 'Shadow Demon', 'Shadow Shaman', 'Silencer', 'Skywrath Mage', 'Storm Spirit', 'Techies', 'Tinker', 'Visage', 'Void Spirit', 'Warlock', 'Windranger', 'Winter Wyvern', 'Witch Doctor', 'Zeus'];

const skills = ['Q', 'W', 'E'];

const tempItems = ['Bottle', 'Null Talisman', 'Wraith Band', 'Bracer', 'Soul Ring', 'Orb Of Corrosion', 'Urn Of Shadows', 'Buckler', 'Ring Of Basilius', 'Headdress', 'Medallion Of Courage', 'Magic Wand', 'Magic Wand', 'Falcon Blade'];

const boots = ['Power Treads', 'Phase Boots', 'Boots Of Travel', 'Arcane Boots', 'Tranquil Boots'];

const items = ['Ghost Scepter', 'Blink Dagger', 'Mask Of Madness', 'Hand Of Midas', 'Helm Of The Dominator', 'Moon Shard', 'Helm Of The Overlord', 'Drum Of Endurance', 'Mekansm', 'Holy Locket', "Vladmir's Offering", 'Spirit Vessel', 'Pipe Of Insight', 'Guardian Greaves', 'Boots Of Bearing', 'Wraith Pact', 'Veil Of Discord', 'Glimmer Cape', 'Force Staff', 'Aether Lens', 'Witch Blade', "Eul's Scepter Of Divinity", 'Rod Of Atos', 'Dagon Lvl 1', 'Dagon Lvl 2', 'Dagon Lvl 3', 'Dagon Lvl 4', 'Orchid Malevolence', 'Solar Crest', "Aghanim's Scepter", 'Refresher Orb', 'Octarine Core', 'Scythe Of Vyse', 'Gleipnir', 'Wind Waker', 'Hood Of Defiance', 'Vanguard', 'Blade Mail', 'Aeon Disk', 'Eternal Shroud', 'Crimson Guard', 'Lotus Orb', 'Black King Bar', 'Hurricane Pike', 'Manta Style', "Linken's Sphere", "Shiva's Guard", 'Heart Of Tarrasque', 'Assault Cuirass', 'Bloodstone', 'Crystalys', 'Meteor Hammer', 'Armlet Of Mordiggian', 'Skull Basher', 'Shadow Blade', 'Desolator', 'Battle Fury', 
'Ethereal Blade', 'Nullifier', 'Monkey King Bar', 'Butterfly', 'Radiance', 'Daedalus', 'Silver Edge', 'Bloodthorn', 'Abyssal Blade', "Revenant's Brooch", 'Dragon Lance', 'Sange', 'Yasha', 'Kaya', 'Echo Sabre', 'Maelstrom', 'Diffusal Blade', 'Mage Slayer', "Heaven's Halberd", 'Kaya And Sange', 'Sange And Yasha', 'Yasha And Kaya', 'Satanic', 'Eye Of Skadi', 'Mjollnir', 'Overwhelming Blink', 'Swift Bling', 'Arcane Blink', 'Divine Rapier', 'Gem of True Sight'];

const heroPara = document.querySelector('#heroPara');
const skillPara = document.querySelector('#skillPara');
const tempItemPara = document.querySelector('#tempItemPara');
const bootsItemPara = document.querySelector('#bootsItemPara');
const firstItemPara = document.querySelector('#firstItemPara');
const secondItemPara = document.querySelector('#secondItemPara');
const thirdItemPara = document.querySelector('#thirdItemPara');
const fourthItemPara = document.querySelector('#fourthItemPara');
const fifthItemPara = document.querySelector('#fifthItemPara');
const sixthItemPara = document.querySelector('#sixthItemPara');

let hero, maxFirst, tempItem, bootsItem, firstItem, secondItem, thirdItem, fourthItem, fifthItem, sixthItem;

function randomize() {
  hero = heroes[Math.floor(Math.random()*heroes.length)];
  maxFirst = skills[Math.floor(Math.random()*3)];
  tempItem = tempItems[Math.floor(Math.random()*tempItems.length)];
  bootsItem = boots[Math.floor(Math.random()*boots.length)];
  firstItem = items[Math.floor(Math.random()*items.length)];
  secondItem = items[Math.floor(Math.random()*items.length)];
  thirdItem = items[Math.floor(Math.random()*items.length)];
  fourthItem = items[Math.floor(Math.random()*items.length)];
  fifthItem = items[Math.floor(Math.random()*items.length)];
  sixthItem = items[Math.floor(Math.random()*items.length)];
  console.log(maxFirst);
}

function changeToNewItems() {
  heroPara.textContent = hero;
  skillPara.textContent = maxFirst;
  tempItemPara.textContent = tempItem;
  bootsItemPara.textContent = bootsItem;
  firstItemPara.textContent = firstItem;
  secondItemPara.textContent = secondItem;
  thirdItemPara.textContent = thirdItem;
  fourthItemPara.textContent = fourthItem;
  fifthItemPara.textContent = fifthItem;
  sixthItemPara.textContent = sixthItem;
}

const randomizeBtn = document.querySelector('#randomizeBtn');

randomizeBtn.addEventListener('click', () => {
  randomize();
  changeToNewItems();
});
