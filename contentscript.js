function loadNewTweets() {
    $('.js-new-tweets-bar').click();
    modifyRetweets();
}

function getChar() {
    let tweetBox = $('#tweet-box-home-timeline');
    return tweetBox.text().length;
}

function modifyRetweets() {
    let tweets = $('#stream-items-id').children();
    for (var i = 0; i < tweets.length ; i++) {
        let tweet = $(tweets[i]).children()[0];
        if(tweet.hasAttribute('data-retweeter')) {
            $(tweets[i]).css('background', 'rgba(100, 255, 255, 0.2');
        }
    }
}

function hideAds() {
    $('.promoted-tweet').hide();
}

function main() {

    // Auto Reload New Tweets
    setInterval(loadNewTweets, 1000);

    // Hide Ads
    hideAds();

    // Remove Radial Counter
    $('.js-radial-counter').remove()

    // Modify tweet character counter
    let counterBox = $('.js-character-counter');
    setInterval( () => {
        let char = getChar();
        counterBox.empty().append(`<p id='char-count-ext'>${char} / 280</p>`);        
    }, 100);
}

$(document).ready(main());