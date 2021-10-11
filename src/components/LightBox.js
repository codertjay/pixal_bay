import React from "react";
import { MDBRow , MDBCol , MDBCardBody , MDBIcon , MDBBtn , MDBView , MDBMask } from "mdbreact";
import { Link } from 'react-router-dom'
import Hoc from "../hoc/hoc";

const ProfileItem = (props) => {
    console.log (props.username)
    console.log (props.first_name)
    console.log (props.last_name)
    console.log (props.profile_pics)

    return (

        <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
                <img
                    src={`${props.profile_pics}`}
                    alt=""
                    className="img-fluid"
                />
                <a href="#!">
                    <MDBMask overlay="white-slight"/>
                </a>
            </MDBView>
            <MDBCardBody className="pb-0">
                <a href="#!" className="green-text">
                    <h5 className="font-weight-bold mt-2 mb-3">
                        <MDBIcon fas icon="chart-line" className="pr-2"/>
                        {props.username}
                    </h5>
                </a>
                <h4 className="font-weight-bold mb-3">{props.first_name} - {props.last_name}</h4>
                <p>
                    {props.skills === null || props.skills === undefined ?
                        <Hoc>
                            my skills what i can do</Hoc>
                        : props.skills
                    }
                </p>
                <Link to={`/profiles/${props.id}/`}>
                    <MDBBtn color="primary" rounded>
                        View portfolio
                    </MDBBtn>
                </Link>
            </MDBCardBody>
        </MDBCol>


    );
}

export default ProfileItem;
// email: "favourtjay@gmail.com"
// first_name: "favour"
// id: 1
// last_name: "thankgod"
// profile:
// about: null
// background_image: null
// id: 1
// linkedin: null
// logo: null
// phone_number: null
// profile_pics: null
// user: "favour"
// website: null