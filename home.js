import { MDCList } from '@material/list';
import { MDCTabBar } from '@material/tab-bar';
import { MDCSelect } from '@material/select';
import FontMetrics from 'fontmetrics'
import {MDCRipple} from '@material/ripple';
import {MDCTextField} from '@material/textfield';

const textField = new MDCTextField(document.querySelector('.mdc-text-field'));
const textField2 = new MDCTextField(document.querySelector('.mdc-text-field2'));
const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));

const h1typeface = new MDCSelect(document.querySelector('.h1typeface'));
const h1weight = new MDCSelect(document.querySelector('.h1weight'));
const h1size = new MDCTextField(document.querySelector('.h1size'));
const h1tracking = new MDCTextField(document.querySelector('.h1tracking'));

const h2typeface = new MDCSelect(document.querySelector('.h2typeface'));
const h2weight = new MDCSelect(document.querySelector('.h2weight'));
const h2size = new MDCTextField(document.querySelector('.h2size'));
const h2tracking = new MDCTextField(document.querySelector('.h2tracking'));

const h3typeface = new MDCSelect(document.querySelector('.h3typeface'));
const h3weight = new MDCSelect(document.querySelector('.h3weight'));
const h3size = new MDCTextField(document.querySelector('.h3size'));
const h3tracking = new MDCTextField(document.querySelector('.h3tracking'));

const h4typeface = new MDCSelect(document.querySelector('.h4typeface'));
const h4weight = new MDCSelect(document.querySelector('.h4weight'));
const h4size = new MDCTextField(document.querySelector('.h4size'));
const h4tracking = new MDCTextField(document.querySelector('.h4tracking'));

const h5typeface = new MDCSelect(document.querySelector('.h5typeface'));
const h5weight = new MDCSelect(document.querySelector('.h5weight'));
const h5size = new MDCTextField(document.querySelector('.h5size'));
const h5tracking = new MDCTextField(document.querySelector('.h5tracking'));

const h6typeface = new MDCSelect(document.querySelector('.h6typeface'));
const h6weight = new MDCSelect(document.querySelector('.h6weight'));
const h6size = new MDCTextField(document.querySelector('.h6size'));
const h6tracking = new MDCTextField(document.querySelector('.h6tracking'));

const s1typeface = new MDCSelect(document.querySelector('.s1typeface'));
const s1weight = new MDCSelect(document.querySelector('.s1weight'));
const s1size = new MDCTextField(document.querySelector('.s1size'));
const s1tracking = new MDCTextField(document.querySelector('.s1tracking'));

const s2typeface = new MDCSelect(document.querySelector('.s2typeface'));
const s2weight = new MDCSelect(document.querySelector('.s2weight'));
const s2size = new MDCTextField(document.querySelector('.s2size'));
const s2tracking = new MDCTextField(document.querySelector('.s2tracking'));

const b1typeface = new MDCSelect(document.querySelector('.b1typeface'));
const b1weight = new MDCSelect(document.querySelector('.b1weight'));
const b1size = new MDCTextField(document.querySelector('.b1size'));
const b1tracking = new MDCTextField(document.querySelector('.b1tracking'));

const b2typeface = new MDCSelect(document.querySelector('.b2typeface'));
const b2weight = new MDCSelect(document.querySelector('.b2weight'));
const b2size = new MDCTextField(document.querySelector('.b2size'));
const b2tracking = new MDCTextField(document.querySelector('.b2tracking'));

const btypeface = new MDCSelect(document.querySelector('.btypeface'));
const bweight = new MDCSelect(document.querySelector('.bweight'));
const bsize = new MDCTextField(document.querySelector('.bsize'));
const btracking = new MDCTextField(document.querySelector('.btracking'));

const ctypeface = new MDCSelect(document.querySelector('.ctypeface'));
const cweight = new MDCSelect(document.querySelector('.cweight'));
const csize = new MDCTextField(document.querySelector('.csize'));
const ctracking = new MDCTextField(document.querySelector('.ctracking'));

const otypeface = new MDCSelect(document.querySelector('.otypeface'));
const oweight = new MDCSelect(document.querySelector('.oweight'));
const osize = new MDCTextField(document.querySelector('.osize'));
const otracking = new MDCTextField(document.querySelector('.otracking'));

const SIZE_DEFAULTS_BY_TEXT_TYPE = {
    h1: 96,
    h2: 60,
    h3: 48,
    h4: 34,
    h5: 24,
    h6: 20,
    b1: 16,
    b2: 14,
    button: 14,
    caption: 12,
    overline: 10,
    subtitle1: 16,
    subtitle2: 14,
};

const ROBOTO_X_HEIGHT_FRACTION = FontMetrics({fontFamily: 'Roboto'}).xHeight;

h1typeface.listen('MDCSelect:change', () => {
    console.log(h1typeface.root_.parentNode.parentNode);
    h1typeface.root_.parentNode.parentNode.style.fontFamily = h1typeface.value;
});

h2typeface.listen('MDCSelect:change', () => {
    console.log(h2typeface.root_.parentNode.parentNode);
    h2typeface.root_.parentNode.parentNode.style.fontFamily = h2typeface.value;
});

h3typeface.listen('MDCSelect:change', () => {
    console.log(h3typeface.root_.parentNode.parentNode);
    h3typeface.root_.parentNode.parentNode.style.fontFamily = h3typeface.value;
});

h4typeface.listen('MDCSelect:change', () => {
    console.log(h4typeface.root_.parentNode.parentNode);
    h4typeface.root_.parentNode.parentNode.style.fontFamily = h4typeface.value;
});

h5typeface.listen('MDCSelect:change', () => {
    console.log(h5typeface.root_.parentNode.parentNode);
    h5typeface.root_.parentNode.parentNode.style.fontFamily = h5typeface.value;
});

h6typeface.listen('MDCSelect:change', () => {
    console.log(h6typeface.root_.parentNode.parentNode);
    h6typeface.root_.parentNode.parentNode.style.fontFamily = h6typeface.value;
});

s1typeface.listen('MDCSelect:change', () => {
    console.log(s1typeface.root_.parentNode.parentNode);
    s1typeface.root_.parentNode.parentNode.style.fontFamily = s1typeface.value;
});

s2typeface.listen('MDCSelect:change', () => {
    console.log(s2typeface.root_.parentNode.parentNode);
    s2typeface.root_.parentNode.parentNode.style.fontFamily = s2typeface.value;
});

b1typeface.listen('MDCSelect:change', () => {
    console.log(b1typeface.root_.parentNode.parentNode);
    b1typeface.root_.parentNode.parentNode.style.fontFamily = b1typeface.value;
});

b2typeface.listen('MDCSelect:change', () => {
    console.log(b2typeface.root_.parentNode.parentNode);
    b2typeface.root_.parentNode.parentNode.style.fontFamily = b2typeface.value;
});

btypeface.listen('MDCSelect:change', () => {
    console.log(btypeface.root_.parentNode.parentNode);
    btypeface.root_.parentNode.parentNode.style.fontFamily = btypeface.value;
});

ctypeface.listen('MDCSelect:change', () => {
    console.log(ctypeface.root_.parentNode.parentNode);
    ctypeface.root_.parentNode.parentNode.style.fontFamily = ctypeface.value;
});

otypeface.listen('MDCSelect:change', () => {
    console.log(otypeface.root_.parentNode.parentNode);
    otypeface.root_.parentNode.parentNode.style.fontFamily = otypeface.value;
});

const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));

const buttons = document.querySelectorAll(".heading-option");
buttons.forEach(function (element) {
    element.onclick = function (e) { myFunction(e) };
});

const buttons2 = document.querySelectorAll(".body-option");
buttons2.forEach(function (element) {
    element.onclick = function (e) { myFunction2(e) };
});


function myFunction(e) {
    const typeExamples = document.querySelectorAll(".headline-example");
    typeExamples.forEach(function (el) {
        let font = FontMetrics({
            fontFamily: e.currentTarget.children[1].innerText,
        });
        let textType = el.id;
        const adjustedFont = getAdjustmentFactor(font, SIZE_DEFAULTS_BY_TEXT_TYPE[textType])
        console.log(adjustedFont);

        el.style.fontSize = adjustedFont + 'px';
        el.style.fontFamily = e.currentTarget.children[1].innerText;

    });
}

function myFunction2(e) {
    const typeExamples = document.querySelectorAll(".body-example");
    typeExamples.forEach(function (el) {
        let font = FontMetrics({
            fontFamily: e.currentTarget.children[1].innerText,
        });
        let textType = el.id;
        const adjustedFont = getAdjustmentFactor(font, SIZE_DEFAULTS_BY_TEXT_TYPE[textType])
        console.log(adjustedFont);

        el.style.fontSize = adjustedFont + 'px';
        el.style.fontFamily = e.currentTarget.children[1].innerText;
    });
}

function getAdjustmentFactor(font, size) {
    const fontXHeightFraction = font.xHeight / size;
    return ROBOTO_X_HEIGHT_FRACTION / fontXHeightFraction;
}

prefill();
function prefill() {
    const typeExamples = document.querySelectorAll(".type-scale-example");
    typeExamples.forEach(function (el) {
        el.style.fontFamily = "Roboto";
        el.children[2].children[0].value = el.style.fontFamily;
        el.children[2].children[1].value = el.style.fontWeight;
        el.children[2].children[2].children[0].value = el.style.fontSize;
        el.children[2].children[3].children[0].value = el.style.letterSpacing;
    });
}