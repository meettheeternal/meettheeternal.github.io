import { html } from "../lib.js";
import { home } from "./templates.js";

const homeTemplate = () => html`${home}`

export function homepage(ctx) {
    ctx.render(homeTemplate());
}