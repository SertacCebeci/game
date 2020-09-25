module.exports = {
    base_attack: {
        name: 'Base Attack',
        cost: '20 mana',
        _key: 'base_attack',
        util: function(Player, Target){
            Target.health += -Player.attack_val;
            Player.mana += -20;
        }
    },
    power_attack: {
        name: 'Power Attack',
        cost: '40 mana',
        _key: 'power_attack',
        util: function(Player, Target){
            Target.health += -Player.attack_val*2;
            Player.mana += -40
        }
    }
}