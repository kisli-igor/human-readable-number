let hundred = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
let ten = ['', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
let unit = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven','twelve','thirteen','fourteen','fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
let numStr = 'zero';

module.exports = function toReadable (number) {
    if (number > 0 && number < 20){
        numStr = unit[number];
    } else if (number >= 20 && number < 100){
        numStr = `${ten[+(number.toString()[0]) - 1]}` + ` ${unit[+(number.toString()[1])]}`;
    } else if (number >= 100 && number <= 109){
        numStr = `${hundred[+(number.toString()[0]) - 1]} ${unit[(+(number.toString()[2]))]}`;
    } else if (number >= 110 && number <= 120){
        numStr = `${hundred[+(number.toString()[0]) - 1]} ${unit[+(number.toString()[1] + number.toString()[2])]}`;
    } else if (number >= 200 && number <= 209){
        numStr = `${hundred[+(number.toString()[0]) - 1]} ${unit[(+(number.toString()[2]))]}`;
    } else if (number >= 210 && number <= 220){
        numStr = `${hundred[+(number.toString()[0]) - 1]} ${unit[+(number.toString()[1] + number.toString()[2])]}`;
    } else if (number >= 300 && number <= 309){
        numStr = `${hundred[+(number.toString()[0]) - 1]} ${unit[(+(number.toString()[2]))]}`;
    } else if (number >= 310 && number <= 320){
        numStr = `${hundred[+(number.toString()[0]) - 1]} ${unit[+(number.toString()[1] + number.toString()[2])]}`;
    } else if (number >= 400 && number <= 409){
        numStr = `${hundred[+(number.toString()[0]) - 1]} ${unit[(+(number.toString()[2]))]}`;
    } else if (number >= 410 && number <= 420){
        numStr = `${hundred[+(number.toString()[0]) - 1]} ${unit[+(number.toString()[1] + number.toString()[2])]}`;
    } else if (number >= 500 && number <= 509){
        numStr = `${hundred[+(number.toString()[0]) - 1]} ${unit[(+(number.toString()[2]))]}`;
    } else if (number >= 510 && number <= 520){
        numStr = `${hundred[+(number.toString()[0]) - 1]} ${unit[+(number.toString()[1] + number.toString()[2])]}`;
    } else if (number >= 600 && number <= 609){
        numStr = `${hundred[+(number.toString()[0]) - 1]} ${unit[(+(number.toString()[2]))]}`;
    } else if (number >= 610 && number <= 620){
        numStr = `${hundred[+(number.toString()[0]) - 1]} ${unit[+(number.toString()[1] + number.toString()[2])]}`;
    } else if (number >= 700 && number <= 709){
        numStr = `${hundred[+(number.toString()[0]) - 1]} ${unit[(+(number.toString()[2]))]}`;
    } else if (number >= 710 && number <= 720){
        numStr = `${hundred[+(number.toString()[0]) - 1]} ${unit[+(number.toString()[1] + number.toString()[2])]}`;
    } else if (number >= 800 && number <= 809){
        numStr = `${hundred[+(number.toString()[0]) - 1]} ${unit[(+(number.toString()[2]))]}`;
    } else if (number >= 810 && number <= 820){
        numStr = `${hundred[+(number.toString()[0]) - 1]} ${unit[+(number.toString()[1] + number.toString()[2])]}`;
    } else if (number >= 900 && number <= 909){
        numStr = `${hundred[+(number.toString()[0]) - 1]} ${unit[(+(number.toString()[2]))]}`;
    } else if (number >= 910 && number <= 920){
        numStr = `${hundred[+(number.toString()[0]) - 1]} ${unit[+(number.toString()[1] + number.toString()[2])]}`;
    } else if (number >= 121 ){
    numStr = `${hundred[+(number.toString()[0]) - 1]} ${ten[+(number.toString()[1]) - 1]} ${unit[(+(number.toString()[2])) ]}`;

    }
    return numStr.trim();
}