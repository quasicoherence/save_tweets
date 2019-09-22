

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
  }, 2000); // 2 second wait
}

myLoop();