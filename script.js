// If your twitter account is suspended, you won't be able to access your tweets
// using any standard APIs, nor will you be able to download your archive.
// However, you will be able to still login on desktop (though not on mobile).
// After logging in and going to your timeline, you can copy/paste the below
// code into your javascript console and it will load tweets and put them into
// the allArticles variable. After the script finishes, it will put all the
// tweets into the allPosts string which you can then copy/paste and save
// elsewhere.
//
// USE THIS AT YOUR OWN RISK!!! I make no guarantees that anything works.

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
  currArticleElements = document.getElementsByTagName("article");
  currArticles = Array.from(currArticleElements).map(function(article) {
    return article.innerText;
  });
  added = addToArticles(currArticles);
  window.scrollBy(0, 2000);
  return added;
}

function myLoop() {
  setTimeout(function() {
    added = getArticlesAndScroll();
    if (added) {
      myLoop();
    } else {
      allPosts = Array.from(allArticles).join("\n\n\n");
      alert("All done! Your tweets are in the allPosts variable.")
    }
  }, 3000); // 3 second wait
}

myLoop();