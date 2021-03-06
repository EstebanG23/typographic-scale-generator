import { MDCTabBar } from '@material/tab-bar';
import { MDCSelect } from '@material/select';
import FontMetrics from 'fontmetrics'
import { MDCRipple } from '@material/ripple';
import { MDCTextField } from '@material/textfield';
import { typography, typographyConst } from './type-vars';
import { platform } from 'os';
import { API_KEY } from './keys'

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

    if (document.querySelector('#typescale-tab').classList.contains('mdc-tab--active')) {
    }
    document.querySelector('.main-content').scrollTo(0, 0)
  });
}

// Get dynamic fonts
function readJSON(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
          callback(rawFile.responseText);
      }
  }
  rawFile.send(null);
}

// Code Display Selection
platformSelect.listen('MDCSelect:change', () => {
  const platform = platformSelect.value
  document.querySelector('.platform-instruction').innerHTML = getInstruction(platform)
  document.querySelector('.code-block').innerHTML = getCode(platform)
});

// Get dynamic Google Fonts
readJSON(`https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=${API_KEY}`, function(text){
  const allFonts = JSON.parse(text).items.filter(font => font.family.match(/^[a-zA-Z ]*$/g));
  autocomplete(document.getElementById("myInput"), allFonts);
  console.log(allFonts)

  const bodyFonts = allFonts.filter(font => font.category === 'serif' || font.category === 'sans-serif' || font.category === 'monospace')
  
  autocomplete2(document.getElementById("myInput2"), bodyFonts);
});


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
  type = platformSelect.value;
if (type === 'web') {
  return `
$mdc-typography-styles-headline1: (
  font-family: unquote("${typography.h1.typeface}"),
  font-size: ${typography.h1.size}
);
$mdc-typography-styles-headline2: (
  font-family: unquote("${typography.h2.typeface}"),
  font-size: ${typography.h2.size}
);
$mdc-typography-styles-headline3: (
  font-family: unquote("${typography.h3.typeface}"),
  font-size: ${typography.h3.size}
);
$mdc-typography-styles-headline4: (
  font-family: unquote("${typography.h4.typeface}"),
  font-size: ${typography.h4.size}
);
$mdc-typography-styles-headline5: (
  font-family: unquote("${typography.h5.typeface}"),
  font-size: ${typography.h5.size}
);
$mdc-typography-styles-headline6: (
  font-family: unquote("${typography.h6.typeface}"),
  font-size: ${typography.h6.size}
);
$mdc-typography-styles-body1: (
  font-family: unquote("${typography.body1.typeface}"),
  font-size: ${typography.body1.size}
);
$mdc-typography-styles-body2: (
  font-family: unquote("${typography.body2.typeface}"),
  font-size: ${typography.body2.size}
);
$mdc-typography-styles-subtitle1: (
  font-family: unquote("${typography.subtitle1.typeface}"),
  font-size: ${typography.subtitle1.size}
);
$mdc-typography-styles-subtitle2: (
  font-family: unquote("${typography.subtitle2.typeface}"),
  font-size: ${typography.subtitle2.size}
);
$mdc-typography-styles-button: (
  font-family: unquote("${typography.button.typeface}"),
  font-size: ${typography.button.size}
);
$mdc-typography-styles-overline: (
  font-family: unquote("${typography.overline.typeface}"),
  font-size: ${typography.overline.size}
);
$mdc-typography-styles-caption: (
  font-family: unquote("${typography.caption.typeface}"),
  font-size: ${typography.caption.size}
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
  headline1: GoogleFonts.${lowerCamelCase(typography.h1.typeface)}(
    fontSize: ${typography.h1.size},
    fontWeight: FontWeight.w300,
    letterSpacing: -1.5
  ),
  headline2: GoogleFonts.${lowerCamelCase(typography.h2.typeface)}(
    fontSize: ${typography.h2.size},
    fontWeight: FontWeight.w300,
    letterSpacing: -0.5
  ),
  headline3: GoogleFonts.${lowerCamelCase(typography.h3.typeface)}(
    fontSize: ${typography.h3.size},
    fontWeight: FontWeight.w400
  ),
  headline4: GoogleFonts.${lowerCamelCase(typography.h4.typeface)}(
    fontSize: ${typography.h4.size},
    fontWeight: FontWeight.w400,
    letterSpacing: 0.25
  ),
  headline5: GoogleFonts.${lowerCamelCase(typography.h5.typeface)}(
    fontSize: ${typography.h5.size},
    fontWeight: FontWeight.w400
  ),
  headline6: GoogleFonts.${lowerCamelCase(typography.h6.typeface)}(
    fontSize: ${typography.h6.size},
    fontWeight: FontWeight.w500,
    letterSpacing: 0.15
  ),
  subtitle1: GoogleFonts.${lowerCamelCase(typography.subtitle1.typeface)}(
    fontSize: ${typography.subtitle1.size},
    fontWeight: FontWeight.w400,
    letterSpacing: 0.15
  ),
  subtitle2: GoogleFonts.${lowerCamelCase(typography.subtitle2.typeface)}(
    fontSize: ${typography.subtitle2.size},
    fontWeight: FontWeight.w500,
    letterSpacing: 0.1
  ),
  bodyText1: GoogleFonts.${lowerCamelCase(typography.body1.typeface)}(
    fontSize: ${typography.body1.size},
    fontWeight: FontWeight.w400,
    letterSpacing: 0.5
  ),
  bodyText2: GoogleFonts.${lowerCamelCase(typography.body2.typeface)}(
    fontSize: ${typography.body2.size},
    fontWeight: FontWeight.w400,
    letterSpacing: 0.25
  ),
  button: GoogleFonts.${lowerCamelCase(typography.button.typeface)}(
    fontSize: ${typography.button.size},
    fontWeight: FontWeight.w500,
    letterSpacing: 1.25
  ),
  caption: GoogleFonts.${lowerCamelCase(typography.caption.typeface)}(
    fontSize: ${typography.caption.size},
    fontWeight: FontWeight.w400,
    letterSpacing: 0.4
  ),
  overline: GoogleFonts.${lowerCamelCase(typography.overline.typeface)}(
    fontSize: ${typography.overline.size},
    fontWeight: FontWeight.w400,
    letterSpacing: 1.5
  ),
)`
}
}

const getInstruction = (type = 'web') => {
  type = platformSelect.value;
  if (type === 'web' && typography.h1.typeface === typography.body1.typeface) {
    return `See <a target="_blank" href="https://fonts.google.com/specimen/${urlName(typography.h1.typeface)}?selection.family=${urlName(typography.h1.typeface)}">${typography.h1.typeface}</a> on Google Fonts for further installation instructions.` }
  else if (type === 'web') {
    return `See <a target="_blank" href="https://fonts.google.com/specimen/${urlName(typography.h1.typeface)}?selection.family=${urlName(typography.h1.typeface)}">${typography.h1.typeface}</a> and <a target="_blank" href="https://fonts.google.com/specimen/${urlName(typography.body1.typeface)}?selection.family=${urlName(typography.body1.typeface)}">${typography.body1.typeface}</a> on Google Fonts for further installation instructions.`
  } else if (type === 'android') {
    return `Add fonts via Android Studio using <a target="_blank" href="https://developer.android.com/guide/topics/ui/look-and-feel/downloadable-fonts#via-android-studio">Downloadable Fonts</a>.`
  } else if (type === 'flutter') {
    return `See <a target="_blank" href="https://flutter.dev/docs/cookbook/design/fonts">flutter.dev</a> for instructions on how to add these fonts to your project.
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

// clicking into font dropdown input selects it to 
// signify you can type in the input
document.querySelectorAll('.type-input').forEach((input) => {
  input.addEventListener('click', (e) => {
    e.target.select()
  });
});

function autocomplete(inp, arr) {
  // A11y to open dropdown
  document.addEventListener('keydown', (e) => {
    if (inp === document.activeElement) {
      if (e.key === 'Enter') {
        e.preventDefault()
        openDropdown()
      }
    }
  })

  function openDropdown() {
    const parent = inp.parentElement
    document.querySelector('.autocomplete-input').focus();
    document.querySelector('.autocomplete-dropdown').classList.add('flipped');
    var a, b, i = parent.children[0].value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", parent.children[0].id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      parent.children[0].parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          b.innerHTML += arr[i].family;
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' data-value='" + urlName(arr[i].family) + "' value='" + arr[i].family + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              let fontValue = inp.value

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
  
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.parentNode.addEventListener("click", function(){
    openDropdown()
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
        if (arr[i].family.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].family.substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].family.substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' data-value='" + arr[i].value + "' value='" + arr[i].family + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              let fontValue = inp.value
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
    if (e.keyCode === 40 || e.keyCode === 38) {
      const parent = document.querySelector('#myInputautocomplete-list')
      // Focus movement
      parent.children[currentFocus + 1].scrollIntoView({ block: 'nearest', inline: 'start' })
    }
    
      // Focus position logic
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
  // A11y to open dropdown
  document.addEventListener('keydown', (e) => {
    if (inp === document.activeElement) {
      if (e.key === 'Enter') {
        e.preventDefault()
        openDropdown()
      }
    }
  })

  function openDropdown() {
    const parent = inp.parentElement
    document.querySelector('.autocomplete2-input').focus();
    document.querySelector('.autocomplete2-dropdown').classList.add('flipped');
    var a, b, i, val = parent.children[0].value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", parent.children[0].id + "autocomplete2-list");
      a.setAttribute("class", "autocomplete2-items");
      /*append the DIV element as a child of the autocomplete container:*/
      parent.children[0].parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          b.innerHTML += arr[i].family;
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' data-value='" + urlName(arr[i].family) + "' value='" + arr[i].family + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              let fontValue = inp.value
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

              // Scroll body into view when changing body & captions typeface
              // this is a tester for this interaction
              setTimeout(() => document.querySelector('#overline .value').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' }), 250)
          });
          a.appendChild(b);
      }
  }

  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.parentNode.addEventListener("click", function(){
    openDropdown()
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
        if (arr[i].family.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].family.substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].family.substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' data-value='" + arr[i].value + "' value='" + arr[i].family + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              let fontValue = inp.value
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
              setTimeout(() => document.querySelector('#overline .value').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' }), 250)
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
    if (e.keyCode === 40 || e.keyCode === 38) {
      const parent = document.querySelector('#myInput2autocomplete2-list')
      // Focus movement
      parent.children[currentFocus + 1].scrollIntoView({ block: 'nearest', inline: 'start' })
    }

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

// Copy to clipboard
document.querySelector('.copyBtn').addEventListener('click', (e) => {
  e.preventDefault()
  const text = document.querySelector('.code-block').textContent
  const successMsg = document.querySelector('.successMsg')

  // Add the text to the DOM with a hidden input field
  const input = document.createElement('input')
  document.querySelector('.mdc-drawer__content').appendChild(input)
  input.value = text
  input.style.display="fixed"  // avoid scrolling to bottom and showing input
  input.style.opacity="0"  // visually hide
  input.style.padding="0"
  input.style.marginLeft="-9999999px"
  input.style.bottom = "0"

  // Select the text
  input.focus()
  input.select()

  // Copy text to clipboard
  const isSuccessful = document.execCommand('copy')

  // Show success and catch errors
  if (isSuccessful) {
    // Show successMsg
    successMsg.classList.add('mdc-snackbar--open')
    input.remove()
    
    // Hide successMsg after 2 seconds
    setTimeout(function () {
      successMsg.classList.remove('mdc-snackbar--open')
    }, 2000);
  } else {
    console.error('Failed to copy text.')
  }
})