 Instructions for bringing back collapse chat button in squad mode:
 
 - Right click your bookmarks bar (`ctrl+shift+B` to show bookmarks bar)
 - Click Add Page
 - For name, put "Show Twitch Collapse Chat Button"
 - For URL, paste this in:
      
    `javascript:(function(document){document.querySelector(".multi-stream-player-layout__chat-toggle").style = "z-index: 1000 !important"})(document);`
 
 Then just click the bookmark while in squad mode.
