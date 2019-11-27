import { MDCTabBar } from '@material/tab-bar';
import { MDCSelect } from '@material/select';
import FontMetrics from 'fontmetrics'
import { MDCRipple } from '@material/ripple';
import { MDCTextField } from '@material/textfield';
import { typography } from './type-vars';

const primaryTypeSelect = new MDCSelect(document.querySelector('.primary-type-select'));
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


// const textField = new MDCTextField(document.querySelector('.mdc-text-field'));
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
  return `TextTheme(
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
    return `Please see Google fonts for further installation instruction.`
  } else if (type === 'android') {
    return `Add the font to your project using Downloadable Fonts via Android Studio.`
  } else if (type === 'flutter') {
    return ``
  }
}

const getLink = (type = 'web') => {
  if (type === 'web') {
    return `https://fonts.google.com/specimen/${urlName(typography.h1.typeface)}?selection.family=${urlName(typography.h1.typeface)}`
  } else if (type === 'android') {
    return `https://developer.android.com/guide/topics/ui/look-and-feel/downloadable-fonts#via-android-studio`
  } else if (type === 'flutter') {
    return ``
  }
}

document.querySelector('.platform-instruction').innerHTML = getInstruction('android')
document.querySelector('.platform-link').href = getLink('android')
document.querySelector('.code-block').innerHTML = getCode('android')