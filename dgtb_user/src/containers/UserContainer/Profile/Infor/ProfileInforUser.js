import React, { Component } from "react";
import ProfileUserForm, {
	ProfileUserInfor,
	InforItem,
	Span,
	Input,
} from "./styles";
class ProfileInforUser extends Component {
	render() {
		return (
			<ProfileUserInfor>
				<div className="infor-user-header">
					<h2>Thông tin cá nhân</h2>
					<span>
						Những thông tin này được hiển thị kế bên các đánh giá, hình ảnh
						v.v... mà bạn đã chia sẻ công khai. Thông tin của bạn sẽ được lưu
						trữ một cách đảm bảo và sẽ không chia sẻ công khai.
					</span>
				</div>
				<ProfileUserForm>
					<InforItem>
						<Span>Họ và tên</Span>
						<Input defaultValue="Tú Annh" />
					</InforItem>

					<InforItem>
						<Span>Giờ sinh</Span>
						<Input defaultValue="04:30 Chiều" />
					</InforItem>

					<InforItem>
						<Span>Ngày sinh chính xác</Span>
						<Input defaultValue="20/08/1996" />
					</InforItem>

					<InforItem>
						<Span>Nơi sinh</Span>
						<Input defaultValue="Hà Nội" />
					</InforItem>

					<InforItem>
						<Span>Nơi sống hiện tại</Span>
						<Input defaultValue="Hà Nội" />
					</InforItem>

					<InforItem>
						<Span>Nghề nghiệp</Span>
						<Input defaultValue="Product Đĩ Sài Nơ" />
					</InforItem>
				</ProfileUserForm>
			</ProfileUserInfor>
		);
	}
}

export default ProfileInforUser;
