import React, { Component } from "react";
import { connect } from "react-redux";
import { actGetFaqWithId } from "../../../redux/actions/faqs";
class FormSee extends Component {
  componentDidMount() {
    this.onGetFAQId();
  }

  onGetFAQId = () => {
    let { id } = this.props.match.params;
    if (id) {
      const { token, actGetFaqWithId } = this.props;
      actGetFaqWithId(token, id);
    }
  };

  render() {
    const { selectedSingleFaq } = this.props;
    let { id } = this.props.match.params;
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>
          {id && selectedSingleFaq ? selectedSingleFaq.question : ""}
        </h1>
        <div
          style={{ color: "#000", background: "#fff", padding: 15 }}
          dangerouslySetInnerHTML={{
            __html: id && selectedSingleFaq ? selectedSingleFaq.answer : ""
          }}
        />
      </div>
    );
  }
}

export default connect(
  state => ({
    token: state.Auth.token,
    selectedSingleFaq: state.FAQ.selectedSingleFaq
  }),
  { actGetFaqWithId }
)(FormSee);
