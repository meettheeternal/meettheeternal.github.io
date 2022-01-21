import { html } from "../lib.js";
import { services } from "./templates.js";

const servicesTemplate = () => html`${services}`


export function servicesPage(ctx) {
    ctx.render(servicesTemplate());
}