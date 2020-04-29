import React, { Component } from "react";
import { Avatar } from "antd";
import ServiceContainer, {
	MasterProvide,
	ServiceProvide,
	ServiceOnline,
	NameService,
	PriceService,
} from "./styles";
import Category from "@Components/Button/Category";
class CardService extends Component {
	render() {
		const { name, value } = this.props;
		return (
			<ServiceContainer img={value.services.thumbnail}>
				<MasterProvide>
					<Avatar size={40} src={value.master[0].thumbnail} />
					<span className="name">{`Thầy ${value.master[0].name}`}</span>
				</MasterProvide>
				<ServiceProvide>
					<ServiceOnline>
						<img src="/icon/Service/option.png" alt="option" />
						<span>Có xem online</span>
					</ServiceOnline>
					<NameService>{name}</NameService>
					<PriceService>
						<span>1.200.000 VND</span>
						<div>
							<Category name={"Tử Vi"} />
						</div>
					</PriceService>
				</ServiceProvide>
			</ServiceContainer>
		);
	}
}

export default CardService;
