var quotes = [
    {
        quoteContent:"“ Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” ",
        quoteAuther: "-- Albert Einstein"
    },
    {
        quoteContent:"“ So many books, so little time.” ",
        quoteAuther: "-- Frank Zappa"
    },
    {
        quoteContent:"“ If you tell the truth, you don't have to remember anything.” ",
        quoteAuther: "-- Mark Twain"
    },
    {
        quoteContent:"“ Friendship ... is born at the moment when one man says to another \"What! You too? I thought that no one but myself . ..” ",
        quoteAuther: "-- C.S. Lewis "
    },
    {
        quoteContent:"“ I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.” ",
        quoteAuther: "-- Maya Angelou"
    },
    {
        quoteContent:"“ To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.” ",
        quoteAuther: "-- Ralph Waldo Emerson"
    },
    {
        quoteContent:"“ Anyone who has never made a mistake has never tried anything new.” ",
        quoteAuther: "-- Albert Einstein"
    },
    {
        quoteContent:"“ We don't see things as they are, we see them as we are.” ",
        quoteAuther: "-- Anaïs Nin"
    },
    {
        quoteContent:"“ You don't love someone because they're perfect, you love them in spite of the fact that they're not.” ",
        quoteAuther: "-- Jodi Picoult"
    },
    {
        quoteContent:"“ Don't waste your love on somebody, who doesn't value it.” ",
        quoteAuther: "-- William Shakespeare"
    },
    {
        quoteContent:"“ To put everything in balance is good, to put everything in harmony is better.” ",
        quoteAuther: "-- Victor Hugo"
    },
    {
        quoteContent:"“ Things change. And friends leave. Life doesn't stop for anybody.” ",
        quoteAuther: "-- Stephen Chbosky"
    },
    {
        quoteContent:"“ But better to get hurt by the truth than comforted with a lie.” ",
        quoteAuther: "-- Khaled Hosseini"
    },
    {
        quoteContent:"“ Never tell the truth to people who are not worthy of it.” ",
        quoteAuther: "-- Mark Twain"
    },
    {
        quoteContent:"“ Even the darkest night will end and the sun will rise.” ",
        quoteAuther: "-- Victor Hugo"
    }

]
var previousRandNum;
var currentRandNum;
function createquote() {
    // from 0 to 14
    currentRandNum = Math.floor(Math.random() * quotes.length);
    if (currentRandNum == previousRandNum) {
        if (  currentRandNum == 0) {
          currentRandNum++;  
        } else {
            currentRandNum--;
        }
        
    } 
    console.log('Cuttent Quote Number is '+currentRandNum);
    document.getElementById("quoteContent").innerHTML = quotes[currentRandNum].quoteContent;
    document.getElementById("quoteAuther").innerHTML = quotes[currentRandNum].quoteAuther;
    previousRandNum = currentRandNum;
}

