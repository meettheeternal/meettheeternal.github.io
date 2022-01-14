import { page, render } from "./lib.js";
import { aboutPage } from "./views/about.js";
import { contactsPage } from "./views/contacts.js";
import { homepage } from "./views/home.js";
import { servicesPage } from "./views/services.js";


const main = document.getElementById(`mainContent`);


page(decororateCtx);
page('/', homepage);
page('/about', aboutPage);
page('/contacts', contactsPage);
page('/services', servicesPage);


page.start();


function decororateCtx(ctx, next) {
    ctx.render = (template) => render(template, main);
    page(homepage);
    next();
}
