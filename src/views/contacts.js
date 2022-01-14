import { html } from "../lib.js";
import { contacts } from "./templates.js";


const contactsTemplate = () => html`${contacts}`

export function contactsPage(ctx) {
    ctx.render(contactsTemplate());
    alert(`Still Under Construction`);
}