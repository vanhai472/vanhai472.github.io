import React, { Component } from "react";
import call_api_comment from "../../../redux/api/apiComment";
import { Skeleton, Rate } from "antd";
import WraperContent, {
  ChatOnline,
  ContentComment,
  ContentCommentHeader,
  ContentCommentMaster,
} from "./style";

class Index extends Component {
  state = {
    optionActive: 1,
    loading: false,
    contentUser: [],
  };
  componentDidMount = () => {
    this.showLoading();
    call_api_comment("user", "get").then((res) =>
      this.setState({ contentUser: res.data })
    );
  };
  showLoading = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  };
  handleOption = (value) => {
    this.setState({ optionActive: value });
    this.showLoading();
  };

  render() {
    const { optionActive, loading, contentUser } = this.state;
    return (
      <WraperContent>
        <div
          className={`select-option ${optionActive == 1 ? "optionActive" : ""}`}
          onClick={() => this.handleOption(1)}
        >
          Mới nhất
        </div>
        <div
          className={`select-option ${optionActive == 2 ? "optionActive" : ""}`}
          onClick={() => this.handleOption(2)}
        >
          Được yêu thích
        </div>
        <Skeleton loading={loading}>
          <div className="wraperContentUser">
            {contentUser.map((data, i) => (
              <ChatOnline key={i}>
                <ContentComment>
                  <ContentCommentHeader>
                    <div style={{ display: "flex" }}>
                      <img
                        className="avataMaster"
                        src={data.src}
                        alt="avata master"
                      />
                      <div>
                        <div className="nameMaster">{data.name}</div>
                        <Rate defaultValue={4} style={{ fontSize: 14 }} />
                      </div>
                    </div>
                    <div className="wraperBuffed">
                      <div style={{ padding: "3px 11px" }}>
                        <img
                          className="img-buffed"
                          src="/icon/Master/buffed.png"
                        />
                        <span className="buffed">Có đặt lịch</span>
                      </div>
                    </div>
                  </ContentCommentHeader>
                  <ContentCommentMaster>
                    <p className="textContentComment">{data.content}</p>
                  </ContentCommentMaster>
                  {/* <CommentFooter>
                  <div style={{ display: "flex" }}>
                    <span>
                      <img
                        src="/icon/Master/likeBlue.png"
                        alt="like"
                        style={{ marginRight: 3, cursor: "pointer" }}
                      />
                    </span>
                    <span className="numberLike">435 Thích </span>
                    <div className="dotCom"></div>
                    <p
                      className="triggerRepComment"
                      onClick={() => this.clickRepCMT(i)}
                    >
                      Trả lời
                    </p>
                  </div>
                  <div className="dateComment">03/01/2020</div>
                </CommentFooter> */}
                  {/* {dataRep.map((value, i) => (
                  <div key={i}>
                    <MasterRepComment>
                      <img
                        style={{ marginRight: 12 }}
                        src="/icon/Master/avatar2.png"
                        alt="avata master"
                      />
                      <span className="wraperBackground">
                        <span className="nameMasterComment"> Thầy A</span>
                        <span style={{ display: "flex" }}>
                          <span className="nameUser">@Minh nguyễn</span>
                          <span className="repComment">{value.content}</span>
                        </span>
                      </span>
                    </MasterRepComment>
                    <LikeAndRep>
                      <div style={{ display: "flex" }}>
                        <span>
                          <img src="/icon/Master/likeBlue.png" alt="like" />
                        </span>
                        <span className="click-like">thích</span>
                        <div className="dotCom"></div>
                        <span
                          className="repIb"
                          onClick={() =>
                            this.setState({
                              showFormRepComments: i,
                            })
                          }
                        >
                          Trả lời
                        </span>
                      </div>
                      <div className="dateComment">03/01/2020</div>
                    </LikeAndRep>
                  </div>
                ))} */}
                  {/* {showFormRepComments === i ? repComment : null} */}
                </ContentComment>
              </ChatOnline>
            ))}
          </div>
        </Skeleton>
      </WraperContent>
    );
  }
}

export default Index;
