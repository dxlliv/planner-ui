import Autolinker from 'autolinker';

export function nl2br(text: string) {
    return text.replace(/(?:\r\n|\r|\n)/g, '<br>')
}

export function autolinker(text: string) {
    return new Autolinker().link(text);
}