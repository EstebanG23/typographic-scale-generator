import { MDCTabBar } from '@material/tab-bar';
import { MDCSelect } from '@material/select';
import FontMetrics from 'fontmetrics'
import { MDCRipple } from '@material/ripple';
import { MDCTextField } from '@material/textfield';
import { typography } from './type-vars';
import { platform } from 'os';
import { fonts } from "./google-fonts";

// const primaryTypeSelect = new MDCSelect(document.querySelector('.primary-type-select'));
const platformSelect = new MDCSelect(document.querySelector('.platform-select'));

const secondaryTypeSelect = new MDCSelect(document.querySelector('.secondary-type-select'));
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

var countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

autocomplete(document.getElementById("myInput"), fonts);

// const textField2 = new MDCTextField(document.querySelector('.mdc-text-field2'));
// const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));

// const h1typeface = new MDCSelect(document.querySelector('.h1typeface'));
// const h1weight = new MDCSelect(document.querySelector('.h1weight'));
// const h1size = new MDCTextField(document.querySelector('.h1size'));
// const h1tracking = new MDCTextField(document.querySelector('.h1tracking'));

// const h2typeface = new MDCSelect(document.querySelector('.h2typeface'));
// const h2weight = new MDCSelect(document.querySelector('.h2weight'));
// const h2size = new MDCTextField(document.querySelector('.h2size'));
// const h2tracking = new MDCTextField(document.querySelector('.h2tracking'));

// const h3typeface = new MDCSelect(document.querySelector('.h3typeface'));
// const h3weight = new MDCSelect(document.querySelector('.h3weight'));
// const h3size = new MDCTextField(document.querySelector('.h3size'));
// const h3tracking = new MDCTextField(document.querySelector('.h3tracking'));

// const h4typeface = new MDCSelect(document.querySelector('.h4typeface'));
// const h4weight = new MDCSelect(document.querySelector('.h4weight'));
// const h4size = new MDCTextField(document.querySelector('.h4size'));
// const h4tracking = new MDCTextField(document.querySelector('.h4tracking'));

// const h5typeface = new MDCSelect(document.querySelector('.h5typeface'));
// const h5weight = new MDCSelect(document.querySelector('.h5weight'));
// const h5size = new MDCTextField(document.querySelector('.h5size'));
// const h5tracking = new MDCTextField(document.querySelector('.h5tracking'));

// const h6typeface = new MDCSelect(document.querySelector('.h6typeface'));
// const h6weight = new MDCSelect(document.querySelector('.h6weight'));
// const h6size = new MDCTextField(document.querySelector('.h6size'));
// const h6tracking = new MDCTextField(document.querySelector('.h6tracking'));

// const s1typeface = new MDCSelect(document.querySelector('.s1typeface'));
// const s1weight = new MDCSelect(document.querySelector('.s1weight'));
// const s1size = new MDCTextField(document.querySelector('.s1size'));
// const s1tracking = new MDCTextField(document.querySelector('.s1tracking'));

// const s2typeface = new MDCSelect(document.querySelector('.s2typeface'));
// const s2weight = new MDCSelect(document.querySelector('.s2weight'));
// const s2size = new MDCTextField(document.querySelector('.s2size'));
// const s2tracking = new MDCTextField(document.querySelector('.s2tracking'));

// const body1typeface = new MDCSelect(document.querySelector('.body1typeface'));
// const body1weight = new MDCSelect(document.querySelector('.body1weight'));
// const body1size = new MDCTextField(document.querySelector('.body1size'));
// const body1tracking = new MDCTextField(document.querySelector('.body1tracking'));

// const body2typeface = new MDCSelect(document.querySelector('.body2typeface'));
// const body2weight = new MDCSelect(document.querySelector('.body2weight'));
// const body2size = new MDCTextField(document.querySelector('.body2size'));
// const body2tracking = new MDCTextField(document.querySelector('.body2tracking'));

// const btypeface = new MDCSelect(document.querySelector('.btypeface'));
// const bweight = new MDCSelect(document.querySelector('.bweight'));
// const bsize = new MDCTextField(document.querySelector('.bsize'));
// const btracking = new MDCTextField(document.querySelector('.btracking'));

// const ctypeface = new MDCSelect(document.querySelector('.ctypeface'));
// const cweight = new MDCSelect(document.querySelector('.cweight'));
// const csize = new MDCTextField(document.querySelector('.csize'));
// const ctracking = new MDCTextField(document.querySelector('.ctracking'));

// const otypeface = new MDCSelect(document.querySelector('.otypeface'));
// const oweight = new MDCSelect(document.querySelector('.oweight'));
// const osize = new MDCTextField(document.querySelector('.osize'));
// const otracking = new MDCTextField(document.querySelector('.otracking'));

// const ROBOTO_X_HEIGHT_FRACTION = FontMetrics({fontFamily: 'Roboto'}).xHeight;

// h1typeface.listen('MDCSelect:change', () => {
//     h1typeface.root_.parentNode.parentNode.style.fontFamily = h1typeface.value;
// });

// h2typeface.listen('MDCSelect:change', () => {
//     h2typeface.root_.parentNode.parentNode.style.fontFamily = h2typeface.value;
// });

// h3typeface.listen('MDCSelect:change', () => {
//     h3typeface.root_.parentNode.parentNode.style.fontFamily = h3typeface.value;
// });

// h4typeface.listen('MDCSelect:change', () => {
//     h4typeface.root_.parentNode.parentNode.style.fontFamily = h4typeface.value;
// });

// h5typeface.listen('MDCSelect:change', () => {
//     h5typeface.root_.parentNode.parentNode.style.fontFamily = h5typeface.value;
// });

// h6typeface.listen('MDCSelect:change', () => {
//     h6typeface.root_.parentNode.parentNode.style.fontFamily = h6typeface.value;
// });

// s1typeface.listen('MDCSelect:change', () => {
//     s1typeface.root_.parentNode.parentNode.style.fontFamily = s1typeface.value;
// });

// s2typeface.listen('MDCSelect:change', () => {
//     s2typeface.root_.parentNode.parentNode.style.fontFamily = s2typeface.value;
// });

// body1typeface.listen('MDCSelect:change', () => {
//     body1typeface.root_.parentNode.parentNode.style.fontFamily = body1typeface.value;
// });

// body2typeface.listen('MDCSelect:change', () => {
//     body2typeface.root_.parentNode.parentNode.style.fontFamily = body2typeface.value;
// });

// btypeface.listen('MDCSelect:change', () => {
//     btypeface.root_.parentNode.parentNode.style.fontFamily = btypeface.value;
// });

// ctypeface.listen('MDCSelect:change', () => {
//     ctypeface.root_.parentNode.parentNode.style.fontFamily = ctypeface.value;
// });

// otypeface.listen('MDCSelect:change', () => {
//     otypeface.root_.parentNode.parentNode.style.fontFamily = otypeface.value;
// });

// const buttons = document.querySelectorAll(".heading-option");
// buttons.forEach(function (element) {
//     element.onclick = function (e) { myFunction(e) };
// });

// const buttons2 = document.querySelectorAll(".body-option");
// buttons2.forEach(function (element) {
//     element.onclick = function (e) { myFunction2(e) };
// });


// function myFunction(e) {
//     const typeExamples = document.querySelectorAll(".headline-example");
//     typeExamples.forEach(function (el) {
//         let font = FontMetrics({
//             fontFamily: e.currentTarget.children[1].innerText,
//         });
//         let textType = el.id;
//         const adjustedFont = getAdjustmentFactor(font, typography[textType].size)

//         el.style.fontSize = adjustedFont + 'px';
//         el.style.fontFamily = e.currentTarget.children[1].innerText;

//     });
// }

// function myFunction2(e) {
//     const typeExamples = document.querySelectorAll(".body-example");
//     typeExamples.forEach(function (el) {
//         let font = FontMetrics({
//             fontFamily: e.currentTarget.children[1].innerText,
//         });
//         let textType = el.id;
//         const adjustedFont = getAdjustmentFactor(font, typography[textType].size)

//         el.style.fontSize = adjustedFont + 'px';
//         el.style.fontFamily = e.currentTarget.children[1].innerText;
//     });
// }

// function getAdjustmentFactor(font, size) {
//     const fontXHeightFraction = font.xHeight / size;
//     return ROBOTO_X_HEIGHT_FRACTION / fontXHeightFraction;
// }

// prefill();
// function prefill() {
//     const typeExamples = document.querySelectorAll(".type-scale-example");
//     typeExamples.forEach(function (el) {
//         el.style.fontFamily = "Roboto";
//         el.children[2].children[0].value = el.style.fontFamily;
//         el.children[2].children[1].value = el.style.fontWeight;
//         el.children[2].children[2].children[0].value = el.style.fontSize;
//         el.children[2].children[3].children[0].value = el.style.letterSpacing;
//     });
// }

// Snake case conversion for Android Studio
const snakeCase = (fontName) => {
  return fontName.replace(/[^\w\s]/g, "").replace(/\s+/g, " ").toLowerCase().split(' ').join('_')
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
  display4: TextStyle(
    fontFamily: ${typography.h1.typeface},
    fontSize: ${typography.h1.size},
  ),
  display3: TextStyle(
    fontFamily: ${typography.h2.typeface},
    fontSize: ${typography.h2.size},
  ),
  display2: TextStyle(
    fontFamily: ${typography.h3.typeface},
    fontSize: ${typography.h3.size},
  ),
  display1: TextStyle(
    fontFamily: ${typography.h4.typeface},
    fontSize: ${typography.h4.size},
  ),
  headline: TextStyle(
    fontFamily: ${typography.h5.typeface},
    fontSize: ${typography.h5.size},
  ),
  title: TextStyle(
    fontFamily: ${typography.h6.typeface},
    fontSize: ${typography.h6.size},
  ),
  subhead: TextStyle(
    fontFamily: ${typography.subtitle1.typeface},
    fontSize: ${typography.subtitle1.size},
  ),
  body2: TextStyle(
    fontFamily: ${typography.body1.typeface},
    fontSize: ${typography.body1.size},
  ),
  body1: TextStyle(
    fontFamily: ${typography.body2.typeface},
    fontSize: ${typography.body2.size},
  ),
  caption: TextStyle(
    fontFamily: ${typography.caption.typeface},
    fontSize: ${typography.caption.size},
  ),
  button: TextStyle(
    fontFamily: ${typography.button.typeface},
    fontSize: ${typography.button.size},
  ),
  subtitle: TextStyle(
    fontFamily: ${typography.subtitle2.typeface},
    fontSize: ${typography.subtitle2.size},
  ),
  overline: TextStyle(
    fontFamily: ${typography.overline.typeface},
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

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("click", function(){
    this.value = ' ';
    this.dispatchEvent(event);
  });
  inp.addEventListener("blur", function(){
    if (this.value == ' ') {
      this.value = '';
    }
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
                }
              });
              document.getElementById('h1').children[0].style.fontFamily = inp.value;
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
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}

