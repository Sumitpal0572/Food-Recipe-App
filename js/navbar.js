// js/navbar.js
export function createNavbar() {
    const navbar = document.createElement("nav");
    navbar.innerHTML = `
          <div class="navbar">
              <a href="../index.html/">Home</a>
              <a href="./htmlpages/search.html">Search</a>
              <a href="../htmlpages/recipeoftheday.html">Recipe of the Day</a>
              <a href="../htmlpages/randomrecipe.html">Random Recipes</a>
          </div>
      `;
    document.body.insertBefore(navbar, document.body.firstChild);
}