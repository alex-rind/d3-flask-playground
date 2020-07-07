import { renderChart, initChart } from "./chart";

const BACKEND_URL = "http://" + window.location.hostname + ":5000" + "/data/12";
console.log(BACKEND_URL);

initChart("#chart");
renderChart("#chart", BACKEND_URL);

const button = document.getElementById("refresh");
if (button != null) {
	button.addEventListener("click", (e) => renderChart("#chart", BACKEND_URL));
}
