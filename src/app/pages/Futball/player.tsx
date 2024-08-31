import React from "react";
import { ProfileDetails } from "../../../app/modules/accounts/components/settings/cards/ProfileDetails"
import { useParams } from 'react-router-dom';

const Playerpage = () => {
  const { id } = useParams();
  console.log(id)
    return (
        <>
            <div>
                <ProfileDetails />
            </div>
        </>
    );
}

export default Playerpage;