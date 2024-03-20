import * as model from "./model.js";
import recipeView from "./views/recipeView.js";

//import icons
// import icons from "../img/icons.svg"; //Parcel 1

// polyfill
import "core-js/stable";
import "regenerator-runtime/runtime";
import recipeView from "./views/recipeView.js";
// console.log(icons);
const recipeContainer = document.querySelector(".recipe");

//
///////////////////////////////////////
console.log("test");

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);
    if (!id) return;

    recipeView.renderSpinner();
    ////////////////////Loading Receipe/////////////////////////////////////

    await model.loadRecipe(id);
    // const { recipe } = model.state;
    // console.log(recipe);
    //////////////////////Rendering Receipe////////////////////////////////
    // const recipeView = new recipeView(model.state.recipe)
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};
controlRecipes();
//event # id
// window.addEventListener("hashchange", controlRecipes);
// window.addEventListener("load", controlRecipes);

// ["hashchange", "load"].forEach((evnt) =>
//   window.addEventListener(evnt, controlRecipes)
// );

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
};
init();
