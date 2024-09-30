import {atom} from 'recoil'

export const checkboxesAtom = atom({
    key:"checkboxesAtom",
    default: [{
        title: "Include Uppercase Letters",
        state: false,
    }, {
        title: "Include Lowercase Letters",
        state: false,
    }, {
        title: "Include Numbers",
        state: false,
    }, {
        title: "Include Symbols",
        state: false,
    }]
})

export const lengthAtom = atom({
    key:"lengthAtom",
    default:4
})