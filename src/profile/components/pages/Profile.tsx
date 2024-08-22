import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProfileTop from "./ProfileTop";
import { AppState, useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getProfileById } from "../../redux/actions/getProfileById";
import { ProfileType } from "../../redux/types/ProfileType";

type Props = {};

const Profile = (props: Props) => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProfileById(id as string));
  }, [dispatch, id]);
  const { currentProfile } = useAppSelector(
    (store: AppState) => store.profileReducer
  );

  return (
    <>
      {id} {currentProfile?.bio}
      {currentProfile != null ? (
        <ProfileTop profile={currentProfile as ProfileType}></ProfileTop>
      ) : (
        ""
      )}
    </>
  );
};

export default Profile;
