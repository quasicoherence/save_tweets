// If your twitter account is suspended, you won't be able to access your tweets
// using any standard APIs, nor will you be able to download your archive.
// However, you will be able to still login on desktop (though not on mobile).
// After logging in and going to your profile, you can copy/paste the below
// code into your javascript console and it will load tweets and put them into
// the allArticles variable. After the script finishes, it will put all the
// tweets into the allPosts string which you can then copy/paste and save
// elsewhere.
//
// USE THIS AT YOUR OWN RISK!!! I make no guarantees that anything works.
//
// Note: This trick can be used for more general scraping purposes as well.

var allArticles = new Set();
var allPosts;

function addToArticles(a) {
  var added = false;
  for (let x of a) {
    if (!allArticles.has(x)) {
      allArticles.add(x);
      added = true;
    }
  }
  return added;
}

function getArticlesAndScroll() {
  // Tweets have HTML tag name "article"
  currArticleElements = document.getElementsByTagName("article");
  currArticles = Array.from(currArticleElements).map(function(article) {
    // You can alternatively return article.innerHTML if you want the full HTML.
    return article.innerText;
  });
  added = addToArticles(currArticles);
  // Scroll down by 2000 pixels.
  window.scrollBy(0, 2000);
  return added;
}

function myLoop() {
  setTimeout(function() {
    added = getArticlesAndScroll();
    // This if clause can be changed to whatever you want. As it is, the loop
    // continues if you've successfully added new tweets to allArticles in the
    // previous iteration.
    if (added) {
      myLoop();
    } else {
      allPosts = Array.from(allArticles).join("\n\n\n");
      alert("All done! Your tweets are in the allPosts variable.")
    }
  }, 3000); // 3 second wait
}

myLoop();