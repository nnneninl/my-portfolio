#!/bin/sh

CSS_OUTPUT="style.css"
HTML_OUTPUT="index.html"

{
	cat styles/variables.css
	cat styles/reset.css
} > "$CSS_OUTPUT"

{
	cat components/layout/html-start.html
	cat components/layout/head.html
	cat components/layout/body-start.html
	cat components/ui/header.html
	cat components/layout/main-start.html
	cat components/layout/main-end.html
	cat components/ui/footer.html
	cat components/layout/body-end.html
	cat components/layout/html-end.html
} > "$HTML_OUTPUT"

printf "Built %s and %s.\n" "$CSS_OUTPUT" "$HTML_OUTPUT"
