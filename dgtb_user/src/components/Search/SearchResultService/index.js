import React, { Component } from "react";
import { Button, Avatar } from "antd";
import Rate from "@Components/Button/Rate";
import CardSearchMasterWrapper, {
	WrapperSwiper,
	CardSearchMasterContent,
	ContentHeader,
	ContentWrapper,
	Content,
	ContentOption,
	ContentFooter,
} from "./styles";
import { withTheme } from "styled-components";
class index extends Component {
	render() {
		return (
			<CardSearchMasterWrapper>
				<WrapperSwiper>
					<img src="/icon/Service/1.png" alt="Rectangle" />
				</WrapperSwiper>
				<CardSearchMasterContent>
					<ContentHeader>
						<h3>Xem tử vi theo tháng sinh</h3>
						<span>Tử Vi</span>
					</ContentHeader>

					<ContentWrapper>
						<Content>
							<ContentOption>
								<img src="/icon/Service/5.png" alt="5" />
								<span>Có xem online</span>
							</ContentOption>

							<ContentOption>
								<img src="/icon/Service/6.png" alt="6" />
								<span>Hủy lịch mất phí</span>
							</ContentOption>

							<ContentOption>
								<span className="promotion">1.200.000 VNĐ</span>
							</ContentOption>
						</Content>

						<Content>
							<ContentOption>
								<img src="/icon/Service/7.png" alt="7" />
								<span>Được đổi lịch</span>
							</ContentOption>

							<ContentOption>
								<span className="price">1.200.000 VNĐ</span>
							</ContentOption>
						</Content>
					</ContentWrapper>

					<ContentFooter>
						<div className="footer-header">
							<Avatar size={40} src="/icon/Service/avatar.png" />
							<h3>Thầy A</h3>
							<Rate
								rate={4.8}
								background={this.props.theme.backgroundRateSearchResult}
							/>
						</div>
						<Button className="sign-blue" style={{ width: 160 }}>
							Đặt lịch
						</Button>
					</ContentFooter>
				</CardSearchMasterContent>
			</CardSearchMasterWrapper>
		);
	}
}

export default withTheme(index);
