import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./index.css";

class Gallery extends React.Component {
	items = [
		{
			src: "/image/slider-profile-master/image1.png",
		},
		{
			src: "/image/slider-profile-master/image2.jpg",
		},
		{
			src: "/image/slider-profile-master/image3.jpg",
		},
		{
			src: "/image/slider-profile-master/image4.jpg",
		},
	];

	state = {
		currentIndex: 0,
		responsive: { 1024: { items: 1 } },
		galleryItems: this.galleryItems(),
	};

	slideTo = (i) => this.setState({ currentIndex: i });

	onSlideChanged = (e) => this.setState({ currentIndex: e.item });

	slideNext = () =>
		this.setState({ currentIndex: this.state.currentIndex + 1 });

	slidePrev = () =>
		this.setState({ currentIndex: this.state.currentIndex - 1 });

	thumbItem = (src, i) => (
		<span onClick={() => this.slideTo(i)}>
			<img className="imgBottom" key={i} src={src.src} alt="a" />{" "}
		</span>
	);

	galleryItems() {
		return this.items.map((src, i) => (
			<img key={i} src={src.src} alt="a" className="imgTop" />
		));
	}

	render() {
		const { galleryItems, responsive, currentIndex } = this.state;
		return (
			<div className="slider-master" style={{ position: "relative" }}>
				<AliceCarousel
					dotsDisabled={true}
					buttonsDisabled={true}
					items={galleryItems}
					responsive={responsive}
					slideToIndex={currentIndex}
					onSlideChanged={this.onSlideChanged}
				/>

				<ul style={{ position: "relative" }}>
					{this.items.map(this.thumbItem)}
				</ul>
				<img
					className="buttonChangeSlide prev"
					onClick={() => this.slidePrev()}
					src="/image/slider-profile-master/prev.png"
					alt="prev"
				/>
				<img
					className="buttonChangeSlide next"
					onClick={() => this.slideNext()}
					src="/image/slider-profile-master/next.png"
					alt="next"
				/>
			</div>
		);
	}
}
export default Gallery;
