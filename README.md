# PhantomBot-D20
A simple D20 dice command for PhantomBot
Created by and for Epic Duck Studios
https://twitch.tv/epicduckstudios

# Installation
The folder structure of this repo matches that used by PhantomBot. You just need
to copy the following two files to their same-pathed location (or clone this
repo directly into your PhantomBot folder).

- scripts/games/d20.js
- lang/english/games/games-d20.js

If you're using a language other than English, you'll need to create a suitable
`lang` file yourself. It's only 3 lines, so the translation should be pretty
trivial :)

After copying the files, you'll need to restart PhantomBot, and enable
`./games/d20.js` from your Dashboard under Twitch Modules.

# Usage
Channel visitors can roll a D20 by simply entering the command `!d20`.
The most recent dice roll can be retrieved with `!d20 last`.

# Future Plans
- A per-user roll history, so that if multiple users are rolling in succession
individual results can be retrieved.
- A `target number` parameter which also accepts some modifiers, so that rolls
with different kinds of targets (<, <=, =, >=, >) can be considered successful.
- A `bonus/penalty` parameter, so rolls of the nature `1d20+5` can be made.
- A `quantity` parameter, so you can simulate "handful of dice" style rolling.
- A full Dice command suite that rolls everything from a D2 to a D100.

A future command may look like `!d20 x5 +3 >10`, meaning 5 dice are being
rolled with a +3 bonus to each, and a success on results greater than 10. Any
of the parameters would be optional.

# Contributing
It's Git, fire me a pull request if you want to add something. Additional `lang`
files greatly appreciated :)

# Say Thanks
I'm usually broadcasting on Twitch Wednesday evenings at 8PM EST, and Sunday
afternoons at 3PM EST.  Pop by my stream at https://twitch.tv/epicduckstudios
and say thanks there! I'd love to hear that people are using this.

If you're the type who feels compelled to say thanks with your wallet, donations
can be made from my Twitch page.  Seriously though, this is a really simple
script so I don't expect that.

# License
PhantomBot-D20 is licensed under the
[**GNU General Public License v3 (GPL-3)**](https://www.gnu.org/copyleft/gpl.html).
