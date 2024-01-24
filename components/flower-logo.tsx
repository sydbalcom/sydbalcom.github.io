
type Props = {
	fillColor: string
	width: string
}

const FlowerLogo = ({fillColor, width}: Props) => {
	return (
		<svg width={width} height={width} viewBox="0 0 90 93" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M35.2815 91.9444C38.0943 92.7458 40.9599 92.5814 43.5221 91.6452C47.3782 90.2361 50.539 87.0813 51.7765 82.8708C51.781 82.8612 51.785 82.8514 51.7884 82.8413C51.7915 82.8314 51.7946 82.8215 51.7973 82.8117L51.8013 82.7964C51.8042 82.7862 51.8068 82.776 51.8095 82.7662L56.1235 67.6884L69.1424 76.4326C69.1556 76.4424 69.1681 76.4492 69.1807 76.4571C69.1866 76.4608 69.1922 76.4646 69.1984 76.4691C75.3111 80.5345 83.6022 78.8926 87.7028 72.7962C91.8099 66.6979 90.1938 58.3987 84.1154 54.2714L84.1014 54.2606C84.0897 54.2515 84.0806 54.2448 84.068 54.2389L71.0655 45.4811L83.4106 35.8031C89.2097 31.2571 90.2319 22.8339 85.6858 17.0359C81.1402 11.238 72.722 10.2146 66.9144 14.7567L54.5629 24.4159L49.1716 9.68153C46.6366 2.76453 38.9454 -0.809235 32.0249 1.71957C25.1045 4.24838 21.5294 11.9389 24.0539 18.8669L29.4217 33.5957L13.7522 34.1756C13.7466 34.1776 13.7394 34.1788 13.7319 34.1794C13.7222 34.1803 13.7119 34.18 13.7036 34.1791C6.35751 34.472 0.607798 40.6726 0.872649 48.0208C1.13733 55.3687 7.31529 61.1324 14.6545 60.8989C14.6613 60.8985 14.6675 60.8988 14.6735 60.8991L14.6998 60.8995L14.7117 60.8993L30.3817 60.3403L26.089 75.418C26.0881 75.4254 26.0858 75.4334 26.0834 75.4413C26.0809 75.4494 26.0785 75.4573 26.0777 75.4648C24.0861 82.541 28.2102 89.9308 35.2815 91.9444Z" fill={fillColor}/>
		</svg>
	)
}

export default FlowerLogo