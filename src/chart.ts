import * as d3 from "d3";

const BACKEND_URL = "http://localhost:5000/";

const LINE_PLOT_WIDTH = 300;
const LINE_PLOT_HEIGHT = 300;
const margin = { top: 25, right: 10, bottom: 25, left: 50 };
const innerWidth = LINE_PLOT_WIDTH - margin.left - margin.right;
const innerHeight = LINE_PLOT_HEIGHT - margin.top - margin.bottom;

export function initChart(domId: string) {
	const svg = d3
		.select(domId)
		.append("svg")
		.attr("width", LINE_PLOT_WIDTH)
		.attr("height", LINE_PLOT_HEIGHT);

	const gPlot = svg
		.append("g")
		.classed("stdline", true)
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	// y-axis caption
	gPlot
		.append("text")
		.attr("class", "label")
		.attr("transform", "rotate(-90)")
		.attr("x", -innerHeight / 2)
		.attr("y", -33)
		.style("text-anchor", "middle")
		.text("example units");

	// draw the axes in separate svg groups
	gPlot
		.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0," + innerHeight + ")");
	gPlot.append("g").attr("class", "y axis");
}

export function renderChart(domId: string) {
	const gPlot = d3.select(domId).select("g.stdline");
	const t = gPlot.transition().duration(750);

	d3.json(BACKEND_URL + "data/12").then(
		(data: any) => {
			console.log(data);

			d3.select("#modified span").text(data.lastmod);

			const series = data.data as number[];

			// prepare a scales for value to position transformation
			const xScale = d3
				.scaleLinear()
				.domain([0, series.length - 1]) // time steps
				.range([0, innerWidth]);

			const yScale = d3
				.scaleLinear()
				.domain(d3.extent(series) as number[])
				.range([innerHeight, 0]);

			gPlot.selectAll(".x.axis").call(d3.axisBottom(xScale) as any);

			gPlot
				.selectAll(".y.axis")
				.transition(t)
				.call(d3.axisLeft(yScale) as any);

			// configure a (reusable) line helper function
			const lineGenerator = d3
				.line()
				.x((d, i) => xScale(i))
				.y((d) => yScale(+d));

			gPlot
				.selectAll("path.series")
				.data([series])
				.join((enter) => enter.append("path").classed("series", true))
				.transition(t)
				.attr("d", lineGenerator as any);
		},
		(error) => console.warn("Error loading data from Python: " + error)
	);
}
