import React, { Component } from "react";
import classNames from "classnames";

import ProfileSlider from "../../components/ProfileSlider";
import "./style.css";
import CategoryProfile from "../../components/CategoryProfile";
import CategoryAwards from "../../components/CategoryAwards";
import ButtonsSocial from "../../components/ButtonsSocial";
import CustomerGroups from "../../components/CustomerGroups";
import { Consumer } from "../../components/Preload";
import { isEmpty } from "../../utils/isEmpty";
import Loading from "../../components/Loading";

class Profile extends Component {
  state = {
    categoryActive: "profile",
    categoryProfile: "profile",
    categoryAwards: "awards"
  };

  render() {
    const { history, people } = this.props;
    if (isEmpty(people)) {
      return <Loading />;
    }
    const { pathname } = history.location;
    const idPerson = pathname.split("/")[2];
    let neededPerson = people.filter(item => idPerson === item.uuid)[0];
    const { categoryActive, categoryProfile, categoryAwards } = this.state;
    const {
      firstName,
      lastName,
      profilePhoto,
      articles,
      pressPhoto
    } = neededPerson;
    const { type, contacts } = neededPerson;
    const { address, phone, email } = contacts;
    return (
      <div>
        <ProfileSlider idPerson={idPerson} />
        <div className="profile__main">
          <div className="profile__main-img">
            <img src={`.${profilePhoto}`} alt="profile photo" />
          </div>
          <div className="profile__main-info">
            <div className="profile__btn-s">
              <div
                className={classNames({
                  "profile__btn-s-category": true,
                  "profile__btn-s-category_active":
                    categoryActive === categoryProfile
                })}
                onClick={() => this.changeCategory(categoryProfile)}
              >
                {categoryProfile}
              </div>
              <div
                className={classNames({
                  "profile__btn-s-category": true,
                  "profile__btn-s-category_active":
                    categoryActive === categoryAwards
                })}
                onClick={() => this.changeCategory(categoryAwards)}
              >
                {categoryAwards}
              </div>
            </div>
            <h4 className="profile__title">
              {categoryActive === categoryProfile
                ? categoryProfile
                : categoryAwards}
            </h4>
            {categoryActive === categoryProfile ? (
              <CategoryProfile infoCategory={neededPerson} />
            ) : (
              <CategoryAwards infoCategory={neededPerson} />
            )}
          </div>
          <ButtonsSocial component={categoryProfile} />
        </div>
        <div className="profile__press">
          <div className="profile__press-info">
            <h4 className="profile__press-title">
              {`${firstName} ${lastName}`}
              <br /> on Press
            </h4>
            <div
              onClick={() => history.push(`/news/${articles[0].uuid}`)}
              className="profile__article"
            >
              <div className="profile__article-img">
                <img src={articles[0].img} alt="" />
              </div>
              <div className="profile__article-data">
                <div className="profile__article-title">
                  {articles[0].shortDescription}
                </div>
                <div className="profile__article-date">
                  {new Date(articles[0].date).toDateString()}
                </div>
              </div>
            </div>
            <div
              onClick={() => history.push(`/news/${articles[1].uuid}`)}
              className="profile__article"
            >
              <div className="profile__article-img">
                <img src={articles[1].img} alt="" />
              </div>
              <div className="profile__article-data">
                <div className="profile__article-title">
                  {articles[1].shortDescription}
                </div>
                <div className="profile__article-date">
                  {new Date(articles[1].date).toDateString()}
                </div>
              </div>
            </div>
          </div>
          <div className="profile__press-img">
            <img src={`.${pressPhoto}`} alt="press foto" />
          </div>
        </div>
        <div className="similar-clients">
          <h4 className="similar-clients__title">Similar clients</h4>
          <CustomerGroups defaultRole={type} startPath="../." />
        </div>
        <div className="profile__contact" id="contact">
          <h4 className="profile__contact-title">{`Contact ${firstName}`}</h4>
          <div className="profile__contact-data">
            <h3 className="profile__contact-subtitle">Address</h3>
            <a
              className="profile__contact-description"
              href="#"
              target="_blank"
            >
              {address}
            </a>
            <h3 className="profile__contact-subtitle">Phone</h3>
            <a
              className="profile__contact-description"
              href={`tel:${phone}`}
              target="_blank"
            >
              {phone}
            </a>
            <h3 className="profile__contact-subtitle">Email</h3>
            <a
              className="profile__contact-description"
              href={`mailto:${email}`}
            >
              {email}
            </a>
          </div>
        </div>
      </div>
    );
  }

  changeCategory = category => {
    const { categoryAwards, categoryProfile } = this.state;
    if (category === categoryAwards) {
      this.setState({ categoryActive: categoryAwards });
    }
    if (category === categoryProfile) {
      this.setState({ categoryActive: categoryProfile });
    }
  };
}

const ProfileWithProps = props => (
  <Consumer>{value => <Profile people={value.people} {...props} />}</Consumer>
);

export default ProfileWithProps;
