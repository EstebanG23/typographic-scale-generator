import { MDCTabBar } from '@material/tab-bar';
import { MDCSelect } from '@material/select';
import FontMetrics from 'fontmetrics'
import { MDCRipple } from '@material/ripple';
import { MDCTextField } from '@material/textfield';
import { typography, typographyConst } from './type-vars';
import { platform } from 'os';
import { fonts } from "./google-fonts";

// const primaryTypeSelect = new MDCSelect(document.querySelector('.primary-type-select'));
const platformSelect = new MDCSelect(document.querySelector('.platform-select'));

// const secondaryTypeSelect = new MDCSelect(document.querySelector('.secondary-type-select'));
const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));

// Switch content on tab activation

Array.from(document.querySelectorAll('.mdc-tab')).forEach(
  tab => tab.addEventListener('MDCTab:interacted', (e) => switchToTab(e.detail.tabId))
);

const switchToTab = (activatedTabId) => {
  Array.from(document.querySelectorAll('.tab-content')).forEach(tabContent => {
    tabContent.style.display = tabContent.id.slice(0, -1 * '-content'.length) == activatedTabId.slice(0, -1 * '-tab'.length) ? 'block' : 'none';
  });
}

// Code Display Selection
platformSelect.listen('MDCSelect:change', () => {
  const platform = platformSelect.value
  document.querySelector('.platform-instruction').innerHTML = getInstruction(platform)
  document.querySelector('.code-block').innerHTML = getCode(platform)
});

autocomplete(document.getElementById("myInput"), fonts);
autocomplete2(document.getElementById("myInput2"), fonts);

// Snake case conversion for Android Studio
const snakeCase = (fontName) => {
  return fontName.replace(/[^\w\s]/g, "").replace(/\s+/g, " ").toLowerCase().split(' ').join('_')
}

// Lower camel case conversion for Flutter method naming.
function lowerCamelCase(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index == 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}

// URL from name for Google Fonts link
const urlName = (fontName) => {
  return fontName.replace(/ /g, '+')
}

const getCode = (type = 'web') => {
if (type === 'web') {
  return `
$mdc-typography-styles-headline1: (
  font-family: unquote("${typography.h1.typeface}"),
  font-size: ${typography.h1.size};
);
$mdc-typography-styles-headline2: (
  font-family: unquote("${typography.h2.typeface}"),
  font-size: ${typography.h2.size};
);
$mdc-typography-styles-headline3: (
  font-family: unquote("${typography.h3.typeface}"),
  font-size: ${typography.h3.size};
);
$mdc-typography-styles-headline4: (
  font-family: unquote("${typography.h4.typeface}"),
  font-size: ${typography.h4.size};
);
$mdc-typography-styles-headline5: (
  font-family: unquote("${typography.h5.typeface}"),
  font-size: ${typography.h5.size};
);
$mdc-typography-styles-headline6: (
  font-family: unquote("${typography.h6.typeface}"),
  font-size: ${typography.h6.size};
);
$mdc-typography-styles-body1: (
  font-family: unquote("${typography.body1.typeface}"),
  font-size: ${typography.body1.size};
);
$mdc-typography-styles-body2: (
  font-family: unquote("${typography.body2.typeface}"),
  font-size: ${typography.body2.size};
);
$mdc-typography-styles-subtitle1: (
  font-family: unquote("${typography.subtitle1.typeface}"),
  font-size: ${typography.subtitle1.size};
);
$mdc-typography-styles-subtitle2: (
  font-family: unquote("${typography.subtitle2.typeface}"),
  font-size: ${typography.subtitle2.size};
);
$mdc-typography-styles-button: (
  font-family: unquote("${typography.button.typeface}"),
  font-size: ${typography.button.size};
);
$mdc-typography-styles-overline: (
  font-family: unquote("${typography.overline.typeface}"),
  font-size: ${typography.overline.size};
);
$mdc-typography-styles-caption: (
  font-family: unquote("${typography.caption.typeface}"),
  font-size: ${typography.caption.size};
);`
} else if (type === 'android') {
  return `
&lt;resources&gt;
  &lt;style name="TextAppearance.MdcTypographyStyles.Headline1" parent="TextAppearance.MaterialComponents.Headline1"&gt;
      &lt;item name="fontFamily"&gt;@font/${snakeCase(typography.h1.typeface)}&lt;/item&gt;
      &lt;item name="android:fontFamily"&gt;@font/${snakeCase(typography.h1.typeface)}&lt;/item&gt;
      &lt;item name="android:textSize"&gt;${typography.h1.size}sp&lt;/item&gt;
  &lt;/style&gt;
  &lt;style name="TextAppearance.MdcTypographyStyles.Headline2" parent="TextAppearance.MaterialComponents.Headline2"&gt;
      &lt;item name="fontFamily"&gt;@font/${snakeCase(typography.h2.typeface)}&lt;/item&gt;
      &lt;item name="android:fontFamily"&gt;@font/${snakeCase(typography.h2.typeface)}&lt;/item&gt;
      &lt;item name="android:textSize"&gt;${typography.h2.size}sp&lt;/item&gt;
  &lt;/style&gt;
  &lt;style name="TextAppearance.MdcTypographyStyles.Headline3" parent="TextAppearance.MaterialComponents.Headline3"&gt;
      &lt;item name="fontFamily"&gt;@font/${snakeCase(typography.h3.typeface)}&lt;/item&gt;
      &lt;item name="android:fontFamily"&gt;@font/${snakeCase(typography.h3.typeface)}&lt;/item&gt;
      &lt;item name="android:textSize"&gt;${typography.h3.size}sp&lt;/item&gt;
  &lt;/style&gt;
  &lt;style name="TextAppearance.MdcTypographyStyles.Headline4" parent="TextAppearance.MaterialComponents.Headline4"&gt;
      &lt;item name="fontFamily"&gt;@font/${snakeCase(typography.h4.typeface)}&lt;/item&gt;
      &lt;item name="android:fontFamily"&gt;@font/${snakeCase(typography.h4.typeface)}&lt;/item&gt;
      &lt;item name="android:textSize"&gt;${typography.h4.size}sp&lt;/item&gt;
  &lt;/style&gt;
  &lt;style name="TextAppearance.MdcTypographyStyles.Headline5" parent="TextAppearance.MaterialComponents.Headline5"&gt;
      &lt;item name="fontFamily"&gt;@font/${snakeCase(typography.h5.typeface)}&lt;/item&gt;
      &lt;item name="android:fontFamily"&gt;@font/${snakeCase(typography.h5.typeface)}&lt;/item&gt;
      &lt;item name="android:textSize"&gt;${typography.h5.size}sp&lt;/item&gt;
  &lt;/style&gt;
  &lt;style name="TextAppearance.MdcTypographyStyles.Headline6" parent="TextAppearance.MaterialComponents.Headline6"&gt;
      &lt;item name="fontFamily"&gt;@font/${snakeCase(typography.h6.typeface)}&lt;/item&gt;
      &lt;item name="android:fontFamily"&gt;@font/${snakeCase(typography.h6.typeface)}&lt;/item&gt;
      &lt;item name="android:textSize"&gt;${typography.h6.size}sp&lt;/item&gt;
  &lt;/style&gt;
  &lt;style name="TextAppearance.MdcTypographyStyles.Subtitle1" parent="TextAppearance.MaterialComponents.Subtitle1"&gt;
      &lt;item name="fontFamily"&gt;@font/${snakeCase(typography.subtitle1.typeface)}&lt;/item&gt;
      &lt;item name="android:fontFamily"&gt;@font/${snakeCase(typography.subtitle1.typeface)}&lt;/item&gt;
      &lt;item name="android:textSize"&gt;${typography.subtitle1.size}sp&lt;/item&gt;
  &lt;/style&gt;
  &lt;style name="TextAppearance.MdcTypographyStyles.Subtitle2" parent="TextAppearance.MaterialComponents.Subtitle2"&gt;
      &lt;item name="fontFamily"&gt;@font/${snakeCase(typography.subtitle2.typeface)}&lt;/item&gt;
      &lt;item name="android:fontFamily"&gt;@font/${snakeCase(typography.subtitle2.typeface)}&lt;/item&gt;
      &lt;item name="android:textSize"&gt;${typography.subtitle2.size}sp&lt;/item&gt;
  &lt;/style&gt;
  &lt;style name="TextAppearance.MdcTypographyStyles.Body1" parent="TextAppearance.MaterialComponents.Body1"&gt;
      &lt;item name="fontFamily"&gt;@font/${snakeCase(typography.body1.typeface)}&lt;/item&gt;
      &lt;item name="android:fontFamily"&gt;@font/${snakeCase(typography.body1.typeface)}&lt;/item&gt;
      &lt;item name="android:textSize"&gt;${typography.body1.size}sp&lt;/item&gt;
  &lt;/style&gt;
  &lt;style name="TextAppearance.MdcTypographyStyles.Body2" parent="TextAppearance.MaterialComponents.Body2"&gt;
      &lt;item name="fontFamily"&gt;@font/${snakeCase(typography.body2.typeface)}&lt;/item&gt;
      &lt;item name="android:fontFamily"&gt;@font/${snakeCase(typography.body2.typeface)}&lt;/item&gt;
      &lt;item name="android:textSize"&gt;${typography.body2.size}sp&lt;/item&gt;
  &lt;/style&gt;
  &lt;style name="TextAppearance.MdcTypographyStyles.Button" parent="TextAppearance.MaterialComponents.Button"&gt;
      &lt;item name="fontFamily"&gt;@font/${snakeCase(typography.button.typeface)}&lt;/item&gt;
      &lt;item name="android:fontFamily"&gt;@font/${snakeCase(typography.button.typeface)}&lt;/item&gt;
      &lt;item name="android:textSize"&gt;${typography.button.size}sp&lt;/item&gt;
  &lt;/style&gt;
  &lt;style name="TextAppearance.MdcTypographyStyles.Caption" parent="TextAppearance.MaterialComponents.Caption"&gt;
      &lt;item name="fontFamily"&gt;@font/${snakeCase(typography.caption.typeface)}&lt;/item&gt;
      &lt;item name="android:fontFamily"&gt;@font/${snakeCase(typography.caption.typeface)}&lt;/item&gt;
      &lt;item name="android:textSize"&gt;${typography.caption.size}sp&lt;/item&gt;
  &lt;/style&gt;
  &lt;style name="TextAppearance.MdcTypographyStyles.Overline" parent="TextAppearance.MaterialComponents.Overline"&gt;
      &lt;item name="fontFamily"&gt;@font/${snakeCase(typography.overline.typeface)}&lt;/item&gt;
      &lt;item name="android:fontFamily"&gt;@font/${snakeCase(typography.overline.typeface)}&lt;/item&gt;
      &lt;item name="android:textSize"&gt;${typography.overline.size}sp&lt;/item&gt;
  &lt;/style&gt;
&lt;/resources&gt;`
}
else if (type === 'flutter') {
  return `
TextTheme(
  display4: GoogleFonts.${lowerCamelCase(typography.h1.typeface)}(
    fontSize: ${typography.h1.size},
  ),
  display3: GoogleFonts.${lowerCamelCase(typography.h2.typeface)}(
    fontSize: ${typography.h2.size},
  ),
  display2: GoogleFonts.${lowerCamelCase(typography.h3.typeface)}(
    fontSize: ${typography.h3.size},
  ),
  display1: GoogleFonts.${lowerCamelCase(typography.h4.typeface)}(
    fontSize: ${typography.h4.size},
  ),
  headline: GoogleFonts.${lowerCamelCase(typography.h5.typeface)}(
    fontSize: ${typography.h5.size},
  ),
  title: GoogleFonts.${lowerCamelCase(typography.h6.typeface)}(
    fontSize: ${typography.h6.size},
  ),
  subhead: GoogleFonts.${lowerCamelCase(typography.subtitle1.typeface)}(
    fontSize: ${typography.subtitle1.size},
  ),
  body2: GoogleFonts.${lowerCamelCase(typography.body1.typeface)}(
    fontSize: ${typography.body1.size},
  ),
  body1: GoogleFonts.${lowerCamelCase(typography.body2.typeface)}(
    fontSize: ${typography.body2.size},
  ),
  caption: GoogleFonts.${lowerCamelCase(typography.caption.typeface)}(
    fontSize: ${typography.caption.size},
  ),
  button: GoogleFonts.${lowerCamelCase(typography.button.typeface)}(
    fontSize: ${typography.button.size},
  ),
  subtitle: GoogleFonts.${lowerCamelCase(typography.subtitle2.typeface)}(
    fontSize: ${typography.subtitle2.size},
  ),
  overline: GoogleFonts.${lowerCamelCase(typography.overline.typeface)}(
    fontSize: ${typography.overline.size},
  ),
)`
}
}

const getInstruction = (type = 'web') => {
  if (type === 'web') {
    return `See <a href="https://fonts.google.com/specimen/${urlName(typography.h1.typeface)}?selection.family=${urlName(typography.h1.typeface)}">${typography.h1.typeface} on Google fonts</a> for further installation instruction.`
  } else if (type === 'android') {
    return `Please add the font via Android Studio using <a href="https://developer.android.com/guide/topics/ui/look-and-feel/downloadable-fonts#via-android-studio">Downloadable Fonts</a>.`
  } else if (type === 'flutter') {
    return `See <a href="https://flutter.dev/docs/cookbook/design/fonts">flutter.dev</a> for instructions on how to add this font to your project.
    `
  }
}

document.querySelector('.platform-instruction').innerHTML = getInstruction()
document.querySelector('.code-block').innerHTML = getCode()

var event = new Event('input', {
  bubbles: true,
  cancelable: true,
});

const ROBOTO_X_HEIGHT_FRACTION = FontMetrics({fontFamily: 'Roboto'}).xHeight;

function myFunction(selectedFont) {
    const typeExamples = document.querySelectorAll(".headline-example");
    typeExamples.forEach(function (el) {
        let font = FontMetrics({
            fontFamily: selectedFont,
        });
        let textType = el.id;
        const adjustedFont = getAdjustmentFactor(font, typographyConst[textType].size)

        typography[textType].typeface = selectedFont;
        typography[textType].size = Math.round(adjustedFont);
        el.children[0].style.fontSize = adjustedFont + 'px';
        el.children[0].style.fontFamily = selectedFont;
    });
}

function myFunction2(selectedFont) {
    const typeExamples = document.querySelectorAll(".body-example");
    typeExamples.forEach(function (el) {
        let font = FontMetrics({
            fontFamily: selectedFont,
        });
        let textType = el.id;
        const adjustedFont = getAdjustmentFactor(font, typographyConst[textType].size)

        typography[textType].typeface = selectedFont;
        typography[textType].size = Math.round(adjustedFont);
        el.children[0].style.fontSize = adjustedFont + 'px';
        el.children[0].style.fontFamily = selectedFont;
    });
}

function getAdjustmentFactor(font, size) {
    const fontXHeightFraction = font.xHeight / size;
    return ROBOTO_X_HEIGHT_FRACTION / fontXHeightFraction;
}

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.parentNode.addEventListener("click", function(){
    document.querySelector('.autocomplete-input').focus();
    document.querySelector('.autocomplete-dropdown').classList.add('flipped');
    var a, b, i, val = this.children[0].value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.children[0].id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.children[0].parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          b.innerHTML += arr[i].text;
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' data-value='" + arr[i].value + "' value='" + arr[i].text + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              let fontValue = this.getElementsByTagName("input")[0].dataset.value;
              
              WebFont.load({
                google: {
                  families: [fontValue]
                },
                active: function () {
                  myFunction(inp.value);

                  document.querySelectorAll('.h-s-typeface-value').forEach(function (element) {
                      element.innerHTML = inp.value;

                  });
                  document.querySelectorAll('.h-s-size-value').forEach(function (element) {
                    element.innerHTML = Math.round(typography[element.parentNode.parentNode.parentNode.id].size) + 'px';
                  });
                  document.querySelector('.platform-instruction').innerHTML = getInstruction();
                  document.querySelector('.code-block').innerHTML = getCode();
                }
              });
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
      }
    // this.value = ' ';
    // this.dispatchEvent(event);
  });
  inp.addEventListener("blur", function(){
    // closeAllLists();
  });
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].text.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].text.substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].text.substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' data-value='" + arr[i].value + "' value='" + arr[i].text + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              let fontValue = this.getElementsByTagName("input")[0].dataset.value;
              WebFont.load({
                google: {
                  families: [fontValue]
                },
                active: function () {
                  myFunction(inp.value);

                  document.querySelectorAll('.h-s-typeface-value').forEach(function (element) {
                      element.innerHTML = inp.value;

                  });
                  document.querySelectorAll('.h-s-size-value').forEach(function (element) {
                    element.innerHTML = Math.round(typography[element.parentNode.parentNode.parentNode.id].size) + 'px';
                  });
                  document.querySelector('.platform-instruction').innerHTML = getInstruction();
                  document.querySelector('.code-block').innerHTML = getCode();
                }
              });
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
      document.querySelector('.autocomplete-dropdown').classList.remove('flipped');
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
  var w = document.querySelector(".autocomplete");
  var x = document.querySelector(".path");
  var y = document.querySelector(".autocomplete-dropdown");
  var z = document.querySelector(".path").nextSibling;
  if (e.target == x || e.target == y || e.target == z || e.target == w) {
    return;
  }
    closeAllLists(e.target);
});
}

function autocomplete2(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.parentNode.addEventListener("click", function(){
    document.querySelector('.autocomplete2-input').focus();
    document.querySelector('.autocomplete2-dropdown').classList.add('flipped');
    var a, b, i, val = this.children[0].value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.children[0].id + "autocomplete2-list");
      a.setAttribute("class", "autocomplete2-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.children[0].parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          b.innerHTML += arr[i].text;
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' data-value='" + arr[i].value + "' value='" + arr[i].text + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              let fontValue = this.getElementsByTagName("input")[0].dataset.value;
              WebFont.load({
                google: {
                  families: [fontValue]
                },
                active: function () {
                  myFunction2(inp.value);

                  document.querySelectorAll('.b-c-typeface-value').forEach(function (element) {
                      element.innerHTML = inp.value;

                  });
                  document.querySelectorAll('.b-c-size-value').forEach(function (element) {
                    element.innerHTML = Math.round(typography[element.parentNode.parentNode.parentNode.id].size) + 'px';
                  });
                  document.querySelector('.platform-instruction').innerHTML = getInstruction();
                  document.querySelector('.code-block').innerHTML = getCode();
                }
              });
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
      }
    // this.value = ' ';
    // this.dispatchEvent(event);
  });
  inp.addEventListener("blur", function(){
    // closeAllLists();
  });
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete2-list");
      a.setAttribute("class", "autocomplete2-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].text.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].text.substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].text.substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' data-value='" + arr[i].value + "' value='" + arr[i].text + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              let fontValue = this.getElementsByTagName("input")[0].dataset.value;
              WebFont.load({
                google: {
                  families: [fontValue]
                },
                active: function () {
                  myFunction2(inp.value);

                  document.querySelectorAll('.b-c-typeface-value').forEach(function (element) {
                      element.innerHTML = inp.value;

                  });
                  document.querySelectorAll('.b-c-size-value').forEach(function (element) {
                    element.innerHTML = Math.round(typography[element.parentNode.parentNode.parentNode.id].size) + 'px';
                  });
                  document.querySelector('.platform-instruction').innerHTML = getInstruction();
                  document.querySelector('.code-block').innerHTML = getCode();
                }
              });
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete2-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete2-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete2-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete2-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
      document.querySelector('.autocomplete2-dropdown').classList.remove('flipped');
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
  var w = document.querySelector(".autocomplete2");
  var x = document.querySelector(".path2");
  var y = document.querySelector(".autocomplete2-dropdown");
  var z = document.querySelector(".path2").nextSibling;
  if (e.target == x || e.target == y || e.target == z || e.target == w) {
    return;
  }
    closeAllLists(e.target);
});
}