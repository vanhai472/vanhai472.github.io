import Document, { Head, Main, NextScript, Html } from "next/document";

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0"
					/>
					<meta httpEquiv="X-UA-Compatible" content="ie=edge" />
					<meta
						name="description"
						content="Website đánh giá, đặt lịch thầy b, nhanh, uy tin, chất lượng tại Việt Nam"
					/>

					<link
						rel="stylesheet"
						type="text/css"
						charSet="UTF-8"
						href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
					/>
					<link
						rel="stylesheet"
						type="text/css"
						href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
					/>
					<link
						rel="stylesheet"
						href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.css"
					/>
					<link
						rel="stylesheet"
						href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css"
					/>

					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/static/img/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/static/img/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/static/img/favicon-16x16.png"
					/>
					<link rel="manifest" href="/static/img/site.webmanifest" />
					<link
						rel="mask-icon"
						href="/static/img/safari-pinned-tab.svg"
						color="#5bbad5"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
