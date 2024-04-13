import { API } from "../helper/API";
import { ElementBuilder } from "../helper/ElementBuilder";

export class URLBar {
    constructor() {
        const container = document.getElementById('container');
        const inputWrapper = new ElementBuilder('div').addCls('url-bar__wrapper').appendTo(container);
        const actionCombo = new ElementBuilder('select')
            .setAttribute('name', 'cars')
            .setAttribute('id', 'cars')
            .setAttribute('title', 'hello')
            .appendTo(inputWrapper.element)
            .setInnerHTML(`
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="PATCH">PATCH</option>
                <option value="DELETE">DELETE</option>
        `);
        const input = new ElementBuilder('input').addCls('url-bar__input').appendTo(inputWrapper.element);
        new ElementBuilder('button').addCls('url-bar__button').appendTo(inputWrapper.element).setTextContent('Send');

        this.sendButtonFn = async () => {
            const url = input.element.value;
            const method = actionCombo.element.value;
            const data = await API.fetch({ url, method });
            console.log(data);
        }
    }
    
    get listeners () {
        return [
            {
                selector : '.url-bar__wrapper > button.url-bar__button',
                fn : this.sendButtonFn
            }
        ]
    }
}