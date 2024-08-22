import React from "react";
import { ExperienceType } from "../../profile/redux/types/ExperienceType";

type Props = {
  experience: ExperienceType[];
};

const ExpDetails = ({ experience }: Props) => {
  experience.forEach((element: ExperienceType) => {
    console.log(element);
  });
  return (
    <>
      {" "}
      <h2 className="my-2">Experience Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th className="hide-sm">Title</th>
            <th className="hide-sm">Years</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tech Guy Web Solutions</td>
            <td className="hide-sm">Senior Developer</td>
            <td className="hide-sm">02-03-2009 - 01-02-2014</td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ExpDetails;
