import { renderChart, initChart } from "./chart";
initChart("#chart");
renderChart("#chart");

const button = document.getElementById("refresh");
if (button != null) {
	button.addEventListener("click", (e) => renderChart("#chart"));
}
