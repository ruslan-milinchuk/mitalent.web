import React, { useState, useEffect } from "react";
import classNames from "classnames";

import ProfileSlider from "../../components/ProfileSlider";
import CategoryProfile from "../../components/CategoryProfile";
import CategoryAwards from "../../components/CategoryAwards";
import ButtonsSocial from "../../components/ButtonsSocial";
import CustomerGroups from "../../components/CustomerGroups";
import Loading from "../../components/Loading";

import apiFetch from "../../utils/apiFetch";
import { isEmpty } from "../../utils/isEmpty";

import "./style.css";

const CATEGORY_PROFILE = "profile";
const CATEGORY_AWARDS = "awards";

const Profile = ({ history }) => {
  const { pathname } = history.location;
  const idPerson = pathname.split("/")[2];
  const [person, setPerson] = useState({});
  useEffect(() => {
    const callData = async () => {
      const [person] = await apiFetch(`/people?uuid=${idPerson}`);
      setPerson(person);
    };
    callData();
  }, [idPerson]);

  if (isEmpty(person)) {
    return <Loading />;
  }

  const { firstName, type = [], contacts } = person;
  return (
    <div>
      <ProfileSlider idPerson={idPerson} />
      <ProfileMainInfo person={person} />
      <ProfilePress {...person} history={history} />
      <div className="similar-clients">
        <h4 className="similar-clients__title">Similar clients</h4>
        <CustomerGroups defaultRole={type} startPath="../." />
      </div>
      <PersonContact {...contacts} firstName={firstName} />
    </div>
  );
};

const ProfileMainInfo = ({ person }) => {
  const { profilePhoto } = person;
  const [category, setCategory] = useState("profile");

  return (
    <div className="profile__main">
      <div className="profile__main-img">
        <img src={`.${profilePhoto}`} alt="profile" />
      </div>
      <div className="profile__main-info">
        <div className="profile__btn-s">
          <div
            className={classNames({
              "profile__btn-s-category": true,
              "profile__btn-s-category_active": category === CATEGORY_PROFILE
            })}
            onClick={() => setCategory(CATEGORY_PROFILE)}
          >
            {CATEGORY_PROFILE}
          </div>
          <div
            className={classNames({
              "profile__btn-s-category": true,
              "profile__btn-s-category_active": category === CATEGORY_AWARDS
            })}
            onClick={() => setCategory(CATEGORY_AWARDS)}
          >
            {CATEGORY_AWARDS}
          </div>
        </div>
        <h4 className="profile__title">{category}</h4>
        {category === CATEGORY_PROFILE ? (
          <CategoryProfile infoCategory={person} />
        ) : (
          <CategoryAwards infoCategory={person} />
        )}
      </div>
      <ButtonsSocial component={CATEGORY_PROFILE} />
    </div>
  );
};

const ProfilePress = ({
  firstName,
  lastName,
  articles = [],
  pressPhoto,
  history
}) => {
  return (
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
  );
};

const PersonContact = ({ address, phone, email, firstName }) => {
  return (
    <div className="profile__contact" id="contact">
      <h4 className="profile__contact-title">{`Contact ${firstName}`}</h4>
      <div className="profile__contact-data">
        <h3 className="profile__contact-subtitle">Address</h3>
        <a
          className="profile__contact-description"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          {address}
        </a>
        <h3 className="profile__contact-subtitle">Phone</h3>
        <a
          className="profile__contact-description"
          href={`tel:${phone}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {phone}
        </a>
        <h3 className="profile__contact-subtitle">Email</h3>
        <a className="profile__contact-description" href={`mailto:${email}`}>
          {email}
        </a>
      </div>
    </div>
  );
};

export default Profile;
