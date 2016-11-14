const fs = require('fs');


if(4 > process.argv.length){
    console.log("node zipfs <filename> <rank to guess>");
    process.exit();
}


var filename = process.argv[2];
var guess = process.argv[3];

fs.readFile(filename, 'utf8', function (err,data) {
    if (err) {
        return console.log(err);
    }
    var rankings = rankWords(data);

    if(guess < 1){
        console.log("try a number bigger than 0 ");
        process.exit();
    }

    if(guess >= rankings.length){
        console.log("try a number smaller than " + rankings.length);
        process.exit();
    }

    printPrediction(rankings, guess);
});
function printPrediction(rankings, i){
    var theWord = rankings[i].word;
    var prediction = (rankings[0].count/i).toFixed(0);
    var actual = rankings[i].count;
    var diff = Math.abs(prediction - actual);
        console.log("According to Zipf's Law, the word \""+theWord+"\" should occur "+prediction+" times. It occurred "+actual+" times. Off the mark by "+diff+".");
}
function rankWords(book){
    var words = book.replace(/\s+/g, ' ').split(" ");
    var ranks = {};
    for (var i = 0; i < words.length; i++) {
        var word = words[i].trim().replace(/\W+/g,'');
        if(ranks.hasOwnProperty(word)){
            ranks[word]++;
        }else{
            ranks[word] = 1;
        }
    }
    var ranksArray = [];
    for (var r in ranks) {
        if (ranks.hasOwnProperty(r)) {
            ranksArray.push({word: r, count: ranks[r]});
        }
    }

    return ranksArray.sort(function(x,y){
        return y.count - x.count;
    });
}
