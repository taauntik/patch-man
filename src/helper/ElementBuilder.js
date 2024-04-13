export class ElementBuilder {
    constructor(tagName) {
        this.element = document.createElement(tagName);
    }

    addCls(cls) {
        this.element.classList.add(cls);
        return this;
    }

    setTextContent(text) {
        this.element.textContent = text;
        return this;
    }

    setInnerHTML(htmlString) {
        this.element.innerHTML = htmlString;
        return this;
    }

    setAttribute(name, value) {
        this.element.setAttribute(name, value);
        return this;
    }

    appendTo(parentElement) {
        parentElement.appendChild(this.element);
        return this;
    }
}