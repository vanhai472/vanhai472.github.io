import React, { Component } from "react";
import ProfileUserForm, {
	ProfileUserContact,
	InforItem,
	Span,
	Input,
} from "./styles";
class ProfileContactUser extends Component {
	render() {
		return (
			<ProfileUserContact>
				<div className="infor-user-header">
					<h2>Thông tin liên hệ</h2>
					<span>
						Những thông tin này được hiển thị kế bên các đánh giá, hình ảnh
						v.v... mà bạn đã chia sẻ công khai. Thông tin của bạn sẽ được lưu
						trữ một cách đảm bảo và sẽ không chia sẻ công khai.
					</span>
				</div>
				<ProfileUserForm>
					<InforItem>
						<Span>Số điện thoại</Span>
						<Input defaultValue="0969387925" />
					</InforItem>

					<InforItem>
						<Span>Email</Span>
						<Input defaultValue="tu.anh@abc.com" />
					</InforItem>

					<InforItem>
						<Span>Facebook</Span>
						<Input defaultValue="facebook.com/tuanh96" />
					</InforItem>

					<InforItem>
						<Span>Instagram</Span>
						<Input defaultValue="instagram.com/tuanh96" />
					</InforItem>

					<InforItem>
						<Span>Twitter</Span>
						<Input defaultValue="twitter.com/tuanh96" />
					</InforItem>
				</ProfileUserForm>
			</ProfileUserContact>
		);
	}
}

export default ProfileContactUser;
