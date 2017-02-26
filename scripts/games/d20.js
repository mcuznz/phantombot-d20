/**
 * d20.js
 *
 * Literally just rolls a d20
 */
(function() {
  var lastRoll = 0;
  var lastRoller = null;

    /**
     * @event command
     */
    $.bind('command', function(event) {
        var sender = event.getSender().toLowerCase(),
            command = event.getCommand(),
            args = event.getArgs(),
            random;

        var ranked_sender = $.resolveRank(sender);

        /**
         * @commandpath d20 ?last - Roll a D20, or retrieve the last result
         */
        if (command.equalsIgnoreCase('d20')) {
            if (args[0] && args[0] == 'last') {
                if (!lastRoll) {
                  $.say($.lang.get('d20.no_last', ranked_sender));
                } else {
                  if (lastRoller == sender) {
                    $.say($.lang.get('d20.last', ranked_sender, lastRoll, 'you'));
                  } else {
                    $.say($.lang.get('d20.last', ranked_sender, lastRoll, lastRoller));
                  }
                }
                return
            }

            random = $.randRange(1, 20);

            $.say($.lang.get('d20.response', ranked_sender, random));
            lastRoll = random;
            lastRoller = sender;
        }
    });

    /**
     * @event initReady
     */
    $.bind('initReady', function() {
        if ($.bot.isModuleEnabled('./games/d20.js')) {
            $.registerChatCommand('./games/d20.js', 'd20', 7);
        }
    });
})();
