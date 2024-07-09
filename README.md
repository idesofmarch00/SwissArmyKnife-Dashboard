# SwissArmyKnife-Dashboard

A Multipurpose Chrome Extension created using HTML ,CSS and Vanilla JS

This project repo can be installed as a Chrome extension or used as a webpage where users can

- [x] get the price of Bitcoin coin along with it's 24-hour high and low price,
- [x] the user's local weather ,
- [x] use a ToDolist ,
- [x] use a Pomodoro timer,
- [x] get a Random Joke
- [x] get a Random Quote
      with an image as background from Upsplash.

#### This project uses 6 APIs and a DuckDuckGo widget:

- [CoinGecko API](https://www.coingecko.com/en/api/documentation)
- [Open Weather Map API](https://openweathermap.org/current)
- [Unsplash API](https://unsplash.com/documentation#get-a-random-photo)
- [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API#getting_the_current_position)
- [Dad Jokes API](https://icanhazdadjoke.com/slack)
- [Random Quotes API](https://api.quotable.io/random)
- The DuckDuckGo searchbox widget won't work with Chrome and Edge anymore.

### SITE BLOCK FEATURE

There is also a Block Website feature using the options by right clicking on extension in bar.
To configure, click on the extension icon in the toolbar and select **Options** from the menu. Enter sites in the textbox, leaving a new line for each site, like this:

```
facebook.com
instagram.com
youtube.com
!google.com
twitter.com
reddit.com
!reddit.com/r/webdev
```

Sites starting with `!` will be exception to the rule, allowed.

Choose what should be done when you try to visit a blocked site, the options are:

<ol type="A">
<li>Close Tab</li>
<li>Show Blocked info page (page that shows an information about the blocked site)</li>
</ol>

Lastly use the checkbox to enable/disable the blocking.

## **_Future is Bright_**

I will add some functionalities to improve focus and productivity.I will also add some other functionalities like reload tab warning and automatic saving of the todolist and pomodoro state on closing the tab, automatic blocking of top visited sites on launch of the extension blocking , option for blocking spoilers and other trigger words, and ability of the extension to work in incognito.

Would also like to add dictionary widget or daily dictionary new word api.
