import {
    fetch,
} from "fetchy-js";

fetch("http://something.ext", {} , { middlewares: [], retry: true })
    .then((response) => response.text().then((textBody) => console.log(textBody)));
