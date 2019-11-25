import { MDCTabBar } from '@material/tab-bar';
import { MDCSelect } from '@material/select';
import FontMetrics from 'fontmetrics'
import { MDCRipple } from '@material/ripple';
import { MDCTextField } from '@material/textfield';
import { typography } from './type-vars';

const primaryTypeSelect = new MDCSelect(document.querySelector('.primary-type-select'));
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
  return 'android code here'
}
else if (type === 'flutter') {
  return 'flutter code here'
}
}

document.querySelector('.code-block').innerHTML = getCode()