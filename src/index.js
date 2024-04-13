import { URLBar } from "./components/UrlBar";

class LaunchPatchMan {
    start() {
        const UrlBar = new URLBar();
        this.urlBarListens = UrlBar.listeners;

        this.applyListeners();
    }

    applyListeners() {
        document.getElementById('container').addEventListener('click', (e) => {
            this.urlBarListens.forEach(record => {
                if (e.target.closest(record.selector)) {
                    record.fn();
                }
            })
        })
    }
}

new LaunchPatchMan().start();
