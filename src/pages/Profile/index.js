import React, { Component } from "react";
import ProfileSlider from "../../components/ProfileSlider";
import persons from "../../fixtures/persons";
import "./style.css";
import CategoryProfile from "../../components/CategoryProfile";
import CategoryAwards from "../../components/CategoryAwards";
import ButtonsSocial from "../../components/ButtonsSocial";

class Profile extends Component {
  state = {
    categoryActive: "profile",
    categoryProfile: "profile",
    categoryAwards: "awards"
  };
  render() {
    const { history } = this.props;
    const { pathname } = history.location;
    const idPerson = pathname.split("/")[2];
    const neededPerson = [];
    persons.map(item => {
      if (idPerson === item.id) {
        neededPerson.push(item);
      }
    });
    const { categoryActive, categoryProfile, categoryAwards } = this.state;
    const {
      firstName,
      lastName,
      profileFoto,
      article,
      pressFoto
    } = neededPerson[0];
    console.log("neededPerson[0]", neededPerson[0]);
    return (
      <div>
        <ProfileSlider idPerson={idPerson} />
        <div className="profile__main">
          <div className="profile__main-img">
            <img src={`.${profileFoto}`} alt="profile photo" />
          </div>
          <div className="profile__main-info">
            <div className="profile__btn-s">
              <div
                className={
                  categoryActive === categoryProfile
                    ? "profile__btn-s-category profile__btn-s-category_active"
                    : "profile__btn-s-category"
                }
                onClick={() => this.changeCategory(categoryProfile)}
              >
                {categoryProfile}
              </div>
              <div
                className={
                  categoryActive === categoryAwards
                    ? "profile__btn-s-category profile__btn-s-category_active"
                    : "profile__btn-s-category"
                }
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
              onClick={() => history.push(`/news/${article[0].id}`)}
              className="profile__article"
            >
              <div className="profile__article-img">
                <img src={article[0].img} alt="" />
              </div>
              <div className="profile__article-data">
                <div className="profile__article-title">
                  {article[0].shortDescription}
                </div>
                <div className="profile__article-date">
                  {new Date(article[0].date).toDateString()}
                </div>
              </div>
            </div>
            <div
              onClick={() => history.push(`/news/${article[1].id}`)}
              className="profile__article"
            >
              <div className="profile__article-img">
                <img src={article[1].img} alt="" />
              </div>
              <div className="profile__article-data">
                <div className="profile__article-title">
                  {article[1].shortDescription}
                </div>
                <div className="profile__article-date">
                  {new Date(article[1].date).toDateString()}
                </div>
              </div>
            </div>
          </div>
          <div className="profile__press-img">
            <img src={`.${pressFoto}`} alt="press foto" />
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

export default Profile;
