# tunasay

Added a new option `-o`, balloon padding, to the original cowsay.

Usage:

    cowsay -o 30 -f tuna "Tsinghua University TUNA Association"

```
                               ______________________________________
                              < Tsinghua University TUNA Association >
                               --------------------------------------
                 _ _ ___         〇
             __-         `-_    o
         ___/__        〇   \ 。
     - '     _/             /
   '      _ '             /
 / _- ---            __ -
/`     |          _ / \  \
       |       -       \ |
        \    /          V
          \  |
            \ \
              \
```

Advanced Usage:

    cowsay -o 30 -f tuna -W 7 "苟利国家生死以岂因祸福避趋之"  | lolcat

![tunsay](tunasay.png)

ASCII art by @dotkrnl
## cowsay

````
 __________________
< srsly dude, why? >
 ------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
````

cowsay is a configurable talking cow, originally written in Perl by [Tony Monroe](https://github.com/tnalpgge/rank-amateur-cowsay)

This project is a translation in JavaScript of the original program and an attempt to bring the same silliness to node.js.

## Install

    npm install -g cowsay

## Usage

    cowsay JavaScript FTW!

or

    cowthink node.js is cool

It acts in the same way as the original cowsay, so consult `cowsay(1)` or run `cowsay -h`

````
 ________
< indeed >
 --------
    \
     \
                                   .::!!!!!!!:.
  .!!!!!:.                        .:!!!!!!!!!!!!
  ~~~~!!!!!!.                 .:!!!!!!!!!UWWW$$$
      :$$NWX!!:           .:!!!!!!XUWW$$$$$$$$$P
      $$$$$##WX!:      .<!!!!UW$$$$"  $$$$$$$$#
      $$$$$  $$$UX   :!!UW$$$$$$$$$   4$$$$$*
      ^$$$B  $$$$\     $$$$$$$$$$$$   d$$R"
        "*$bd$$$$      '*$$$$$$$$$$$o+#"
             """"          """""""
````

## Usage as a module

cowsay can be used as any other npm dependency

    var cowsay = require("cowsay");

    console.log(cowsay.say({
    	text : "I'm a moooodule",
    	e : "oO",
    	T : "U "
    }));

    // or cowsay.think()

````
 _________________
( I'm a moooodule )
 -----------------
        o   ^__^
         o  (oO)\_______
            (__)\       )\/\
             U  ||----w |
                ||     ||
````

## Pipe from standard input

    echo please repeat | cowsay
